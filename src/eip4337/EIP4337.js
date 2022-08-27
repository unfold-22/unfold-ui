import { ethers, providers, utils } from 'ethers';
import { useEffect, useMemo, useState } from 'react';
import {
  useAccount,
  usePrepareSendTransaction,
  useProvider,
  useSendTransaction,
  useSigner,
} from 'wagmi';
import SimpleWalletArtifact from './abi/SimpleWallet.json';
import EntryPointArtifact from './abi/EntryPoint.json';
import Create2FactoryArtifact from './abi/Create2Factory.json';
import { hexConcat, hexlify, hexValue, hexZeroPad } from 'ethers/lib/utils';
import axios from 'axios';

/*
    const dummyTransaction = {
    to: ethers.constants.AddressZero,
    data: '0x00',
    value: ethers.utils.parseEther('0'),
    };
*/

// Transactions come
// you get a from MM
// map MM to SCW
// initiate deposit to SCW -> how do I calc total value?
// Create a userOp from transactions
// Get sign from MM for SCW
// Send the userOp to bundler

axios.defaults.baseURL = 'https://localhost:8080';
const ENTRY_POINT_ADDR = '0xB08935DE8ef3e095b6EC863F7946B9Ec400C5ABE';
const CREATE_2_FACTORY_ADDR = '0xbCEfC055Cd796452247023e561e062e1e0A628F4';

const useSCWallet = () => {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();
  const [scwAddress, setScwAddress] = useState(null);
  const [initCode, setInitCode] = useState(null);
  const [nounce, setNounce] = useState(0);

  useEffect(() => {
    if (address && signer) {
      const factory = new ethers.Contract(
        CREATE_2_FACTORY_ADDR,
        Create2FactoryArtifact.abi,
        signer
      );
      const salt = hexZeroPad(hexlify(0), 32);
      const SimpleWalletFactory = new ethers.ContractFactory(
        SimpleWalletArtifact.abi,
        SimpleWalletArtifact.bytecode,
        signer
      );
      const deployTx = SimpleWalletFactory.getDeployTransaction(
        ENTRY_POINT_ADDR,
        address
      ).data;
      factory.computeAddress(deployTx, salt).then(async address => {
        const code = await provider.getCode(address);
        const initCallData = factory.interface.encodeFunctionData('deploy', [
          deployTx,
          salt,
        ]);
        setScwAddress(address);
        const initCode =
          code === '0x'
            ? hexConcat([CREATE_2_FACTORY_ADDR, initCallData])
            : undefined;
        setInitCode(initCode);
        const nonce = initCode ? 0 : 1;
        setNounce(nonce);
      });
    }
  }, [signer, address, provider]);

  return { scwAddress, initCode, nounce };
};

const useEIP4337 = ({ transactions, totalValue }) => {
  const { data: signer } = useSigner();
  const { scwAddress, initCode, nounce } = useSCWallet();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendUserOperation = useMemo(() => {
    const sendEthToScW = () => {
      return signer.sendTransaction({
        to: scwAddress,
        value: totalValue,
      });
    };

    const buildUserOp = async () => {
      console.log(initCode);
      return {
        sender: scwAddress,
        nonce: nounce, // need to get nounce
        initCode: initCode,
        callData: 5,
        callGasLimit: 5,
        verificationGasLimit: 5,
        preVerificationGas: 5,
        maxFeePerGas: 5,
        maxPriorityFeePerGas: 5,
        paymasterAndData: '',
        signature: undefined,
      };
    };

    if (signer && scwAddress) {
      return async () => {
        try {
          //   await sendEthToScW();
          const userOp = await buildUserOp();
        } catch (e) {
          setError(e);
        }
      };
    }
    return undefined;
  }, [signer, scwAddress]);

  return { data, error, sendUserOperation };
};

export { useEIP4337, useSCWallet };
