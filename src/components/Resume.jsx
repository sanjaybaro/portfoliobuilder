import React from "react";
import { useSelector } from "react-redux";
import { Box, Text, VStack, Avatar, Image } from "@chakra-ui/react";

const Resume = () => {
  const profile = useSelector((state) => state.profile);
  const theme = useSelector((state) => state.profile.themeColor);

  return (
    <Box
      bg={theme}
      color={theme === "#000000" ? "#FFFFFF" : "#000000"}
      p="4"
      borderRadius="md"
      w="full"
      fontFamily={profile.fontStyle}
      position="relative"
    >
      <VStack align="start" spacing="4">
        {profile.backgroundImage && (
          <Box position="relative" w="full" h="200px" overflow="hidden">
            <Image
              src={profile.backgroundImage}
              alt="Background"
              w="full"
              h="200px"
              objectFit="cover"
            />
            <Avatar
              size="2xl"
              name={profile.name}
              src={profile.profileImage || "https://via.placeholder.com/150"}
              position="absolute"
              bottom="-50px"
              left="10px"
              transform="translateY(-50%)"
              border="4px solid white"
              boxSize="100px"
              objectFit="cover"
            />
          </Box>
        )}
    
        <Box pt="10px" w="full">
          <Text fontSize="2xl" fontWeight="bold">
            {profile.name}
          </Text>
          <Text fontSize="lg">{profile.profession}</Text>
          <Text fontSize="lg">{profile.location}</Text>
          <Text fontSize="md">{profile.bio}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Resume;
