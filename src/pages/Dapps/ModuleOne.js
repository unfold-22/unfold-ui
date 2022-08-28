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
  Tag,
  Avatar,
} from '@chakra-ui/react';
import { CheckIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FiArrowRightCircle, FiPlus, FiPlusCircle } from 'react-icons/fi';

const ModuleOne = ({ selected, onSelect }) => {
  return (
    <Stack
      onClick={() => !selected && onSelect()}
      cursor={selected ? undefined : 'pointer'}
      _hover={{
        bg: selected ? undefined : '#fdecec',
      }}
      borderBottomColor={'gray.300'}
      borderBottomWidth={selected ? '0px' : '1px'}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      padding={4}
      marginBottom="40px"
    >
      <Stack flex={2} flexDirection="column" p={1} pt={2}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          <Flex>
            {/* <Center>
              <Image w={8} src="https://coindix.com/img/protocols/beefy.svg" />
            </Center>
            <Center ml={3}>
              <Text>Beefy - </Text>
            </Center> */}
            <Flex ml={2}>
              {/* <Flex
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
                    src="https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png"
                    alt=""
                    style={{ width: '20px', height: '20px' }}
                  />
                </Box>
                <Box style={{ left: -3, position: 'relative' }}>
                  <Image
                    borderRadius={'50%'}
                    src="https://static.debank.com/image/matic_token/logo_url/0xfa68fb4628dff1028cfec22b4162fccd0d45efb6/151d92446b0b2098c7766d4081921ec0.png"
                    alt=""
                    style={{ width: '20px', height: '20px' }}
                  />
                </Box>
              </Flex> */}
              <Center>
                <Text fontSize={'medium'}>ZAP MaticX + Matic</Text>
              </Center>
            </Flex>
          </Flex>
        </Heading>
        <List spacing={0} fontSize="md">
          <Stack>
            <ListItem
              mt={4}
              pl={4}
              pr={4}
              pt={3}
              pb={3}
              borderRadius={4}
              border={'1px solid'}
              borderColor={'gray.400'}
            >
              <Flex>
                <Center>
                  <Image
                    w={'24px'}
                    mr={'6px'}
                    src="https://s2.coinmarketcap.com/static/img/coins/200x200/8206.png"
                  />
                </Center>
                <Center>
                  <Text fontSize={'xl'}>Swap</Text>
                </Center>
              </Flex>
              <Flex mt={3}>
                <Center mr={6}>
                  <Tag border={'1px solid gray'} rounded={'full'} size="lg">
                    <Avatar
                      mr={2}
                      w={5}
                      h={5}
                      src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Tether-USDT-icon.png"
                    />
                    USDT
                  </Tag>
                </Center>
                <Center mr={6}>
                  <FiArrowRightCircle size={20} />
                </Center>
                <Center>
                  <Tag border={'1px solid gray'} rounded={'full'} size="lg">
                    <Avatar
                      mr={2}
                      w={5}
                      h={5}
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/polygon-matic-cryptocurrency-5108587-4263924.png"
                    />
                    MATIC
                  </Tag>
                </Center>
              </Flex>
            </ListItem>
            <Center mt={'12px'}>
              <FiPlusCircle size={26} />
            </Center>
            <ListItem
              mt={4}
              pl={4}
              pr={4}
              pt={3}
              pb={3}
              borderRadius={4}
              border={'1px solid'}
              borderColor={'gray.400'}
            >
              <Flex>
                <Center>
                  <Image
                    w={'24px'}
                    mr={'6px'}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnORFs6uM_-DyG1CNuYy9KK_VCZy2-UTwwig&usqp=CAU"
                  />
                </Center>
                <Center>
                  <Text fontSize={'xl'}>Invest half in strader</Text>
                </Center>
              </Flex>
              <Flex mt={3}>
                <Center mr={6}>
                  <Tag border={'1px solid gray'} rounded={'full'} size="lg">
                    <Avatar
                      mr={2}
                      w={5}
                      h={5}
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/polygon-matic-cryptocurrency-5108587-4263924.png"
                    />
                    MATIC
                  </Tag>
                </Center>
                <Center mr={6}>
                  <FiArrowRightCircle size={20} />
                </Center>
                <Center>
                  <Tag border={'1px solid gray'} rounded={'full'} size="lg">
                    <Avatar
                      mr={2}
                      w={5}
                      h={5}
                      src="https://static.debank.com/image/matic_token/logo_url/0xfa68fb4628dff1028cfec22b4162fccd0d45efb6/151d92446b0b2098c7766d4081921ec0.png"
                    />
                    MATICX
                  </Tag>
                </Center>
              </Flex>
            </ListItem>
            <Center mt={'12px'}>
              <FiPlusCircle size={26} />
            </Center>
            <ListItem
              mt={4}
              pl={4}
              pr={4}
              pt={3}
              pb={3}
              borderRadius={4}
              border={'1px solid'}
              borderColor={'gray.400'}
            >
              <Flex>
                <Center>
                  <Image
                    w={'24px'}
                    mr={'6px'}
                    src="https://coindix.com/img/protocols/beefy.svg"
                  />
                </Center>
                <Center>
                  <Text fontSize={'xl'}>Beefy - AMM</Text>
                </Center>
              </Flex>
              <Flex mt={3}>
                <Center mr={6}>
                  <Tag border={'1px solid gray'} rounded={'full'} size="lg">
                    <Avatar
                      mr={2}
                      w={5}
                      h={5}
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/polygon-matic-cryptocurrency-5108587-4263924.png"
                    />
                    MATIC
                  </Tag>
                </Center>
                <Center mr={6}>
                  <FiPlusCircle size={20} />
                </Center>
                <Center>
                  <Tag border={'1px solid gray'} rounded={'full'} size="lg">
                    <Avatar
                      mr={2}
                      w={5}
                      h={5}
                      src="https://static.debank.com/image/matic_token/logo_url/0xfa68fb4628dff1028cfec22b4162fccd0d45efb6/151d92446b0b2098c7766d4081921ec0.png"
                    />
                    MATICX
                  </Tag>
                </Center>
              </Flex>
            </ListItem>
          </Stack>
        </List>

        {selected ? null : (
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
        )}
      </Stack>
    </Stack>
  );
};

export default ModuleOne;
