import { Button } from '@chakra-ui/react';
import { ethers, utils } from 'ethers';
import { useEIP4337, useSCWallet } from '../../eip4337/EIP4337';
import GreeterArtifact from '../../eip4337/abi/Greeter.json';
import { useSendTransaction, useSigner } from 'wagmi';
import { useEffect, useMemo } from 'react';

const GREETER_ADR = '0x932C1dA6feD0Efa30AAA5358F34bEEB3f6281B3b';

const Paths = () => {
  const { data: signer } = useSigner();
  const { scwAddress } = useSCWallet();
  const Greeter = useMemo(
    () => new ethers.Contract(GREETER_ADR, GreeterArtifact.abi, signer),
    [signer]
  );

  const { sendUserOperation } = useEIP4337({
    transactions: [
      {
        to: GREETER_ADR,
        value: ethers.utils.parseEther('0.1'),
        data: Greeter.interface.encodeFunctionData('addGreet', []),
      },
      {
        to: GREETER_ADR,
        value: ethers.utils.parseEther('0.1'),
        data: Greeter.interface.encodeFunctionData('addGreet', []),
      },
    ],
    totalValue: utils.parseEther('0.1'),
  });

  useEffect(() => {
    if (signer && scwAddress) {
      Greeter.getGreetCount(scwAddress).then(resp =>
        console.log('greetcount', resp)
      );
      Greeter.getGreets(scwAddress).then(resp =>
        console.log('greet', ethers.utils.formatEther(resp))
      );
    }
  }, [signer, scwAddress, Greeter]);

  return (
    <div>
      hi
      <Button onClick={() => sendUserOperation()}>Test</Button>
    </div>
  );
};

export default Paths;
