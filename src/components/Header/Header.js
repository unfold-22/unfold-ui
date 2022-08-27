import { Box, Center, Flex } from '@chakra-ui/react';
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
        as="nav"
        margin="auto"
        maxWidth="80%"
        p={6}
        justifyContent="space-between"
      >
        <Center>CupCakes</Center>
        <ConnectButton />
      </Flex>
    </Box>
  );
};

export default Header;
