import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Presentation from './components/Presentation';

function App() {
  return (
    <ChakraProvider>
      <Presentation />
    </ChakraProvider>
  );
}

export default App;