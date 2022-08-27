import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stat,
  Switch,
  Tag,
  Text,
} from '@chakra-ui/react';
import { ethers, utils } from 'ethers';
import { useEIP4337, useSCWallet } from '../../eip4337/EIP4337';
import GreeterArtifact from '../../eip4337/abi/Greeter.json';
import { useSendTransaction, useSigner } from 'wagmi';
import { useEffect, useMemo, useState } from 'react';

const GREETER_ADR = '0x932C1dA6feD0Efa30AAA5358F34bEEB3f6281B3b';

const linkItems = [
  { name: 'DeFi', path: '/paths' },
  { name: 'NFTs', path: '/modules' },
];

const Paths = () => {
  const { data: signer } = useSigner();
  const { scwAddress } = useSCWallet();
  const [showModules, setShowModules] = useState(false);
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
    <Box>
      <Flex>
        <Center>
          <Text>Select Gas Token</Text>
        </Center>
        <Select w={150} ml={30}>
          <option>ETH</option>
        </Select>
      </Flex>
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
        <Center>+Add Module</Center>
      </Box>
      <SelectModule isOpen={showModules} setIsOpen={v => setShowModules(v)} />
      <Button onClick={() => sendUserOperation()}>Test</Button>
    </Box>
  );
};

export default Paths;
