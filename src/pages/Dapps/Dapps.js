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

const Dapps = () => {
  return (
    <Container
      p={'50px'}
      marginTop="20px"
      width={'1000px'}
      maxW="1000px"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
        marginBottom="20px"
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={''} />
        </Flex>
        <Stack flex={2} flexDirection="column" p={1} pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Swap and invest in LP
          </Heading>
          <List spacing={0} fontSize="md">
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              swap USDT to MATIC
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
              rounded={'full'}
              bg={'green.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}
            >
              Transact
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={''} />
        </Flex>
        <Stack flex={2} flexDirection="column" p={1} pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Swap and invest in LP
          </Heading>
          <List spacing={0} fontSize="md">
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
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
              rounded={'full'}
              bg={'green.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}
            >
              Transact
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Dapps;
