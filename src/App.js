import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';
import Rainbow from './components/Rainbow';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';

function App() {
  return (
    <BrowserRouter>
      <Rainbow>
        <ChakraProvider theme={theme}>
          <Dashboard />
        </ChakraProvider>
      </Rainbow>
    </BrowserRouter>
  );
}

export default App;
