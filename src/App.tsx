import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { AxiosProvider } from './axios';
import HomePage from './HomePage';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AxiosProvider>
        <HomePage />
      </AxiosProvider>
    </ChakraProvider>
  );
}

export default App;
