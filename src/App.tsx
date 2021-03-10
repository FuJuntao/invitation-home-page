import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HomePageIndex from './HomePage';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomePageIndex />
    </ChakraProvider>
  );
}

export default App;
