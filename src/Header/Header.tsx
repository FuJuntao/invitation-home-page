import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { companyName } from '../shared/texts';

function Header() {
  return (
    <Box as="header" mx="4" py="4" borderBottom="1px" borderColor="gray.200">
      <Heading as="h2" size="md" color="teal.400">
        {companyName}
      </Heading>
    </Box>
  );
}

export default Header;
