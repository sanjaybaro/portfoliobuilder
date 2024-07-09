import React from "react";
import { useSelector } from "react-redux";
import { Box, Text, VStack, Avatar, Image } from "@chakra-ui/react";

const Resume = () => {
  const profile = useSelector((state) => state.profile);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Box
      bg={theme}
      color={theme === "#000000" ? "#FFFFFF" : "#000000"}
      p="4"
      borderRadius="md"
      w="full"
    >
      <VStack align="start" spacing="4">
        {profile.backgroundImage && (
          <Image
            src={profile.backgroundImage}
            alt="Background"
            borderRadius="md"
            w="full"
            h="200px"
            objectFit="cover"
          />
        )}
        <Avatar
          size="xl"
          name={profile.name}
          src={profile.profileImage || "https://via.placeholder.com/150"}
        />
        <Text fontSize="2xl" fontWeight="bold" fontFamily="Arial, sans-serif">
          {profile.name}
        </Text>
        <Text fontSize="lg" fontFamily="Arial, sans-serif">
          {profile.profession}
        </Text>
        <Text fontSize="lg" fontFamily="Arial, sans-serif">
          {profile.location}
        </Text>
        <Text fontSize="md" fontFamily="Arial, sans-serif">
          {profile.bio}
        </Text>
      </VStack>
    </Box>
  );
};

export default Resume;
