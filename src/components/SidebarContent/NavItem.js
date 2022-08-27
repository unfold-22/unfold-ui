import { Box, Flex, Icon, Link } from '@chakra-ui/react';
import { Link as RLink, useLocation } from 'react-router-dom';

const NavItem = ({ path, icon, children, ...rest }) => {
  const { pathname } = useLocation();

  return (
    <RLink to={path}>
      <Box style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          aria-checked={pathname === path}
          align="center"
          p="4"
          mx="4"
          mb={5}
          borderRadius="lg"
          cursor="pointer"
          _hover={{
            bg: 'cyan.100',
          }}
          _checked={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupChecked={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </RLink>
  );
};

export default NavItem;
