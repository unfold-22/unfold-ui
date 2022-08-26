import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';
import Rainbow from './components/Rainbow';

function App() {
  return (
    <Rainbow>
      <ChakraProvider theme={theme}>
        <Dashboard></Dashboard>
      </ChakraProvider>
    </Rainbow>
  );
}

export default App;
