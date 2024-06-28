import React from 'react';
import { Box, VStack, Heading } from '@chakra-ui/react';

const Slide = ({ title, children }) => (
  <VStack spacing={8} align="center" justify="center" height="100vh" width="100%" p={8}>
    <Heading as="h2" size="xl" textAlign="center">
      {title}
    </Heading>
    <Box width="100%" maxWidth="1200px" height="calc(100vh - 200px)">
      {children}
    </Box>
  </VStack>
);

export default Slide;