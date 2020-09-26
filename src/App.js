import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  Box
} from '@chakra-ui/core';
import theme from '@chakra-ui/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box textAlign="center" fontSize="xl">
        hello
      </Box>
    </ChakraProvider>
  );
}

export default App;
