import { Box, Flex } from '@chakra-ui/react';
import SidebarContent from '../SidebarContent/SidebarContent';
import { FiNavigation, FiCodesandbox } from 'react-icons/fi';
import { Routes, Route } from 'react-router-dom';
import Paths from '../../pages/Paths';
import Dapps from '../../pages/Dapps';

const linkItems = [
  { name: 'Paths', icon: FiNavigation, path: '/paths' },
  { name: 'Modules', icon: FiCodesandbox, path: '/modules' },
];

const Content = () => {
  return (
    <Flex w="80%" margin={'30px auto'} p={30}>
      <SidebarContent linkItems={linkItems} />
      <Box pl={20} flex={1}>
        <Routes>
          <Route path="/paths" element={<Paths />} />
          <Route path="/dapps" element={<Dapps />} />
        </Routes>
      </Box>
    </Flex>
  );
};

export default Content;
