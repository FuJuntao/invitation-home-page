import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

function HomePageIndex() {
  return (
    <Flex h="100%" flexDirection="column">
      <Header />
      <Main />
      <Footer />
    </Flex>
  );
}

export default HomePageIndex;
