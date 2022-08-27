import { Button } from '@chakra-ui/react';
import { utils } from 'ethers';
import { useEIP4337 } from '../../eip4337/EIP4337';

const Paths = () => {
  const { data, error, sendUserOperation } = useEIP4337({
    transactions: [],
    totalValue: utils.parseEther('0.1'),
  });
  console.log(data, error);
  return (
    <div>
      hi
      <Button onClick={() => sendUserOperation()}>Test</Button>
    </div>
  );
};

export default Paths;
