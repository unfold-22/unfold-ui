import { ethers, providers, utils, Wallet } from 'ethers';
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
const ENTRY_POINT_ADDR = '0x8ADd98477E39569e15d807482FFDA67aAd347207';
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
            : '0x';
        setInitCode(initCode);
        if (initCode !== '0x') {
          setNounce(0);
        } else {
          const Wallet = new ethers.Contract(
            address,
            SimpleWalletArtifact.abi,
            signer
          );
          const nonce = await Wallet.nonce();
          console.log(nonce);
          setNounce(nonce);
        }
      });
    }
  }, [signer, address, provider]);

  return { scwAddress, initCode, nounce };
};

/**
 * transactions - [{to, value, chainId, data}]
 */
const useEIP4337 = ({ transactions }) => {
  const { data: signer } = useSigner();
  const { scwAddress, initCode, nounce } = useSCWallet();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const totalValue = transactions
    .reduce(
      (result, transaction) => result.add(transaction.value),
      ethers.utils.parseEther('0')
    )
    .add(ethers.utils.parseEther('50'));

  const sendUserOperation = useMemo(() => {
    const sendEthToScW = () => {
      return signer.sendTransaction({
        to: scwAddress,
        value: totalValue,
      });
    };

    const buildUserOp = async () => {
      const Wallet = new ethers.ContractFactory(
        SimpleWalletArtifact.abi,
        SimpleWalletArtifact.bytecode
      );

      const destinations = transactions.map(transaction => transaction.to);
      const values = transactions.map(transaction => transaction.value);
      const txdatas = transactions.map(transaction => transaction.data);
      const chainIds = transactions.map(transaction => transaction.chainId);

      const callData = Wallet.interface.encodeFunctionData('execBatch', [
        destinations,
        values,
        txdatas,
      ]);

      return {
        sender: scwAddress,
        nonce: nounce, // need to get nounce
        initCode: initCode,
        callData: callData,
        callGasLimit: 2088954,
        verificationGasLimit: 5003200,
        preVerificationGas: 21000,
        maxFeePerGas: 1,
        maxPriorityFeePerGas: 1,
        paymasterAndData: '0x',
      };
    };

    const getRequestId = async userOp => {
      const EntryPoint = new ethers.Contract(
        ENTRY_POINT_ADDR,
        EntryPointArtifact.abi,
        signer
      );
      const inputs = [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'initCode',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'callData',
          type: 'bytes',
        },
        {
          internalType: 'uint256',
          name: 'callGasLimit',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'verificationGasLimit',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'preVerificationGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'maxFeePerGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'maxPriorityFeePerGas',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'paymasterAndData',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'signature',
          type: 'bytes',
        },
      ];
      return EntryPoint.getRequestId(
        inputs.map(input =>
          userOp[input.name] !== undefined ? userOp[input.name] : '0x'
        )
      );
    };

    if (signer && scwAddress) {
      return async () => {
        // try {
        await sendEthToScW();
        const userOp = await buildUserOp();
        const requestId = await getRequestId(userOp);
        console.log(requestId);
        userOp.signature = await signer.signMessage(
          ethers.utils.arrayify(requestId)
        );
        console.log(userOp);
        const resp = await axios.post('http://127.0.0.1:9080/rpc', {
          method: 'eth_sendUserOperation',
          params: [userOp, ENTRY_POINT_ADDR],
          jsonrpc: '2.0',
          id: 42,
        });
        console.log(resp.data);
        // } catch (e) {
        //   setError(e);
        // }
      };
    }
    return undefined;
  }, [signer, scwAddress, initCode, nounce, totalValue, transactions]);

  return { data, error, sendUserOperation };
};

export { useEIP4337, useSCWallet };
