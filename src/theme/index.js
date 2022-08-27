import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
};

const colors = {
  bg: {
    default: 'rgba(254, 255, 246, 1)',
    nav: 'rgba(253, 255, 236, 1)',
  },
};
const styles = {
  global: props => ({
    html: {
      fontSize: '16px',
    },
    body: {
      background: colors.bg.default,
      backgroundAttachment: 'fixed',
      height: '100vh',
    },
  }),
};

const theme = extendTheme({
  config,
  colors,
  styles,
});

export default theme;
