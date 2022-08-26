import { Box, Flex } from '@chakra-ui/react';
import SidebarContent from '../SidebarContent/SidebarContent';
import { FiNavigation, FiCodesandbox } from 'react-icons/fi';

const linkItems = [
  { name: 'Paths', icon: FiNavigation },
  { name: 'Dapps', icon: FiCodesandbox },
];

const Content = () => {
  return (
    <Flex w="80%" margin={'30px auto'} p={30}>
      <SidebarContent linkItems={linkItems} />
      <Box w="280px">here</Box>
      <Box>there</Box>
    </Flex>
  );
};

export default Content;
