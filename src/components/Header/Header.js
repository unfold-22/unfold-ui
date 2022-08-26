import { Center, Flex } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <header
      style={{
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }}
    >
      <Flex margin="auto" maxWidth="80%" p={6} justifyContent="space-between">
        <Center>Name of our app</Center>
        <ConnectButton></ConnectButton>
      </Flex>
    </header>
  );
};

export default Header;
