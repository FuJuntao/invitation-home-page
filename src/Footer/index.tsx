/** @jsx jsx */
import { Box, Heading } from '@chakra-ui/react';
import { jsx } from '@emotion/react';
import { companyName } from '../shared/texts';

function Footer() {
  return (
    <Box as="footer">
      <Heading as="h2" textAlign="center" size="sm">
        Made with ❤️ in Shanghai
      </Heading>
      <Heading as="h2" textAlign="center" size="sm">
        © 2021 {companyName} All rights reserved.
      </Heading>
    </Box>
  );
}

export default Footer;
