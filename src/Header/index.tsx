/** @jsx jsx */
import { Box, Heading } from '@chakra-ui/react';
import { jsx } from '@emotion/react';
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
