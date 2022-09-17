import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import {
  useEIP4337,
  useSCWallet,
  paymasterConnector,
} from '../../eip4337/EIP4337';
import GreeterArtifact from '../../eip4337/abi/Greeter.json';
import { useEffect, useMemo, useState } from 'react';
import SelectModule from '../../components/SelectModule';
import { useSigner } from 'wagmi';
import ModuleOne from '../Dapps/ModuleOne';
import axios from 'axios';

const GREETER_ADR = '0x932C1dA6feD0Efa30AAA5358F34bEEB3f6281B3b';
const API_KEY_PAYMASTER = 'asdf90D0Efa30AAA5358F34bEEB3f6281B3b';

const Paths = () => {
  const { data: signer } = useSigner();
  const { scwAddress } = useSCWallet();
  const [showModules, setShowModules] = useState(false);
  const Greeter = useMemo(
    () => new ethers.Contract(GREETER_ADR, GreeterArtifact.abi, signer),
    [signer]
  );
  const [selected, setSelected] = useState(false);

  // 0.0014 ->  0.0017
  const { sendUserOperation, status } = useEIP4337({
    transactions: [
      //   {
      //     to: '0xfF23A09696522cAc320f076a164159b2568B046C',
      //     value: ethers.utils.parseEther('0.0001'), //0.38701101891151056
      //     data: '0x',
      //   },
      {
        to: GREETER_ADR,
        value: ethers.utils.parseEther('0.0002'),
        data: Greeter.interface.encodeFunctionData('addGreet', []),
        chainId: 1,
      },
      {
        to: GREETER_ADR,
        value: ethers.utils.parseEther('0.0001'),
        data: Greeter.interface.encodeFunctionData('addGreet', []),
        chainId: 137,
      },
    ],
    paymasterConnector: paymasterConnector(API_KEY_PAYMASTER),
    askPrefund: true,
  });

  useEffect(() => {
    if (signer && scwAddress) {
      console.log(scwAddress);
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
      {selected ? <Input placeholder="Enter USDT value" /> : null}
      <Center mt={4}>
        <Button
          loadingText="Processing Transaction"
          isLoading={status && status !== 'sent'}
          onClick={() => sendUserOperation()}
          disabled={!selected || (status && status !== 'sent')}
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
