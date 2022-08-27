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
const ModuleOne = () => {
  return (
    <Stack
      borderBottomColor={'gray.300'}
      borderBottomWidth={'1px'}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
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
              <Text>Beefy - </Text>
            </Center>
            <Flex ml={2}>
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
              </Flex>
              <Center>
                <Text fontSize={'medium'}>xMATIC + MATIC</Text>
              </Center>
            </Flex>
          </Flex>
        </Heading>
        <List spacing={0} fontSize="md">
          <ListItem>
            <Text>Swap</Text>
            USDT to MATIC
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
            Wrap half of the MATIC to xMATIC
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
            Provide xMATIC and MATIC liquidity
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

export default ModuleOne;
