import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <Flex
      flexDir={{ base: 'column', md: 'row' }} // Column layout on mobile, row layout on larger screens
      minHeight="100vh" // Ensure full height layout
    >
      <Sidebar
        display={{ base: 'none', md: 'flex' }} // Hide sidebar on small screens
        w={{ base: '100%', md: '20%' }} // Full width on small screens, 20% width on larger screens
        maxW={{ base: '100%', md: '20%' }} // Ensure maximum width doesn't exceed 20%
      />
      <MainContent
        w={{ base: '100%', md: '80%' }} // Full width on small screens, 80% width on larger screens
        maxW={{ base: '100%', md: '80%' }} // Ensure maximum width doesn't exceed 80%
      />
    </Flex>
  );
}

export default App;
