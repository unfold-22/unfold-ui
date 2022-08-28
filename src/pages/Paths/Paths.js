import { Box, Button, Center, Flex, Select, Text } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useEIP4337, useSCWallet } from '../../eip4337/EIP4337';
import GreeterArtifact from '../../eip4337/abi/Greeter.json';
import { useEffect, useMemo, useState } from 'react';
import SelectModule from '../../components/SelectModule';
import { useSigner } from 'wagmi';
import ModuleOne from '../Dapps/ModuleOne';

const GREETER_ADR = '0x932C1dA6feD0Efa30AAA5358F34bEEB3f6281B3b';

const Paths = () => {
  const { data: signer } = useSigner();
  const { scwAddress } = useSCWallet();
  const [showModules, setShowModules] = useState(false);
  const Greeter = useMemo(
    () => new ethers.Contract(GREETER_ADR, GreeterArtifact.abi, signer),
    [signer]
  );
  const [selected, setSelected] = useState(false);

  const { sendUserOperation } = useEIP4337({
    transactions: [
      {
        to: GREETER_ADR,
        value: ethers.utils.parseEther('0.0001'),
        data: Greeter.interface.encodeFunctionData('addGreet', []),
      },
      {
        to: GREETER_ADR,
        value: ethers.utils.parseEther('0.0001'),
        data: Greeter.interface.encodeFunctionData('addGreet', []),
      },
    ],
  });

  console.log(ethers.utils.parseEther('0.05'));

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

  const onSelect = () => {
    setSelected(true);
    setShowModules(false);
  };

  return (
    <Box>
      <Flex>
        <Center>
          <Text>Select Gas Token</Text>
        </Center>
        <Select w={150} ml={30}>
          <option>USDT</option>
          <option>MATIC</option>
          <option>ETH</option>
        </Select>
      </Flex>
      {selected ? <ModuleOne selected={selected} /> : null}
      {!selected ? (
        <Box
          mt={30}
          p={4}
          border="1px"
          borderColor={'green.700'}
          borderRadius="8px"
          borderStyle={'dotted'}
          cursor="pointer"
          onClick={() => setShowModules(true)}
        >
          <Center>Select ZAP</Center>
        </Box>
      ) : null}
      <SelectModule
        onSelect={onSelect}
        isOpen={showModules}
        setIsOpen={v => setShowModules(v)}
      />
      {/* <Button onClick={() => sendUserOperation()}>Test</Button> */}
      <Center mt={4}>
        <Button
          disabled={!selected}
          flex={1}
          fontSize={'sm'}
          bg={'green.400'}
          color={'white'}
          _hover={{
            bg: 'green.500',
          }}
          _focus={{
            bg: 'green.500',
          }}
        >
          Confirm Transactions
        </Button>
      </Center>
    </Box>
  );
};

export default Paths;
