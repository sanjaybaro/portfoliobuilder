import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <Flex>
      <Sidebar />
      <MainContent />
    </Flex>
  );
}

export default App;