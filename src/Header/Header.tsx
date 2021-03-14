import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { companyName } from '../shared/texts';

function Header() {
  return (
    <Box as="header">
      <Heading as="h2" size="sm">
        {companyName}
      </Heading>
    </Box>
  );
}

export default Header;
