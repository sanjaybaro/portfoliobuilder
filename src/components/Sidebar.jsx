import React from "react";
import { VStack, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack align="start" p="4" bg="gray.100" h="100vh" w="20%">
      <Text fontSize="xl" fontWeight="bold">
        Logo Here
      </Text>
      <VStack align="start" mt="8" spacing="4">
        <Text>Home</Text>
        <Text>Schedule</Text>
        <Text>Recommendation</Text>
        <Text>Analytics</Text>
        <Text>Profile</Text>
        <Text>Inbox</Text>
        <Text>Themes</Text>
        <Text>Settings</Text>
      </VStack>
    </VStack>
  );
};

export default Sidebar;
