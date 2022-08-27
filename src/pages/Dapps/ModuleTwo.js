import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  useColorModeValue,
  ColorModeScript,
  useColorMode,
  Button,
  Img,
  Container,
  Stack,
  List,
  ListItem,
  ListIcon,
  Center,
  Image,
  Heading,
  Badge,
  useTheme,
} from '@chakra-ui/react';
import { CheckIcon, ChevronRightIcon } from '@chakra-ui/icons';
const ModuleTwo = () => {
  return (
    <Stack
      borderBottomWidth="1px"
      borderRadius="lg"
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      // boxShadow={'2xl'}
      padding={4}
      marginBottom="40px"
    >
      <Stack flex={2} flexDirection="column" p={1} pt={2}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          <Flex>
            <Center>
              <Image w={8} src="https://coindix.com/img/protocols/beefy.svg" />
            </Center>
            <Center ml={3}>
              <Text>Cryptopunks</Text>
            </Center>
            <Flex>
              <Flex
                style={{
                  width: 39,
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <Box style={{ left: 0, position: 'relative' }}>
                  <Image
                    borderRadius={'50%'}
                    src="https://www.artnews.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-23-at-4.43.05-PM-e1629755437533.png?w=366"
                    alt=""
                    style={{ width: '20px', height: '20px' }}
                  />
                </Box>
                <Box style={{ left: -3, position: 'relative' }}>
                  <Image
                    borderRadius={'50%'}
                    src="https://assets.coingecko.com/coins/images/10760/large/Ulr1CHIGx5Vn0RDTyhrhmi_kWPonxdHFpAoflQmajf-juDNtVl760k1o5qPTiMjplbgZ693Du8P1rdlRAMAmB0-YnPa0h94zm1HCY7mBBLJi0bMNMVlcZqSgKZ2gZEPlMa32HHlQMNtfuUl69DX4KhgGD1mpvSsa1b1_IflHxSWd4BADaP1hHE6BXdLxF1RGxyRmsj5ySBEsegQ.jpg?1583185991"
                    alt=""
                    style={{ width: '20px', height: '20px' }}
                  />
                </Box>
              </Flex>
              <Text fontSize={'medium'}>Buy NFT</Text>
            </Flex>
          </Flex>
        </Heading>
        <List spacing={0} fontSize="md">
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
            swap USDC to MATIC
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
            Bridge MATIC to Ethereum Chain
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
            Swap MATIC for ETH
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
            Use ETH to buy Cryptopunks
          </ListItem>
          {/* You can also use custom icons from react-icons */}
        </List>

        <Stack
          width={'100%'}
          mt={'2rem'}
          direction={'row'}
          padding={2}
          justifyContent={'space-between'}
          alignItems={'right'}
        >
          <Button
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
            Select
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ModuleTwo;
