import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import NavItem from './NavItem';

const SidebarContent = ({ linkItems, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      role="group"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={260}
      //   pos="fixed"
      h="300px"
      {...rest}
    >
      {linkItems.map(link => (
        <NavItem path={link.path} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
