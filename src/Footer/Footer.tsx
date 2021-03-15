import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { companyName } from '../shared/texts';

function Footer() {
  return (
    <Box as="footer" textAlign="center" p="4">
      <Heading as="h2" size="sm" color="gray.600">
        Made with ❤️ in Shanghai
      </Heading>
      <Heading as="h2" mt="2" size="xs" color="gray.400">
        © 2021 {companyName} All rights reserved.
      </Heading>
    </Box>
  );
}

export default Footer;
