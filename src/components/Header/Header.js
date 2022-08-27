import { Box, Center, Flex, Image } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <Box
      as="header"
      borderBottom={'1px solid #e2e8f0'}
      bgColor="bg.nav"
      boxShadow="0px 4px 14px 0px rgba(0, 0, 0, 0.1)"
    >
      <Flex
        maxWidth="120ch"
        m="auto"
        p={6}
        justifyContent="space-between"
        fontSize={'0.8rem'}
      >
        <Center
          fontSize="1.5rem"
          fontFamily="'Pacifico', cursive"
          color="accent.teal.300"
        >
          <Image src="/assets/logo.png" w="2.5rem" mr="0.5rem" />
          CupCakes
        </Center>
        <ConnectButton />
      </Flex>
    </Box>
  );
};

export default Header;
