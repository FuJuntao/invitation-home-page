/** @jsx jsx */
import { ChakraProvider } from '@chakra-ui/react';
import { jsx } from '@emotion/react';
import { AxiosProvider } from './axios';
import HomePageIndex from './HomePage';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AxiosProvider>
        <HomePageIndex />
      </AxiosProvider>
    </ChakraProvider>
  );
}

export default App;
