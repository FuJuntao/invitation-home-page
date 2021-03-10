import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HomePageIndex from './HomePage';

function App() {
  return (
    <ChakraProvider>
      <HomePageIndex />
    </ChakraProvider>
  );
}

export default App;
