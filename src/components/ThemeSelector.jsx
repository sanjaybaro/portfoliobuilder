import React from "react";
import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../store/themeSlice";

const themes = {
  solids: ["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"],
  linearGradients: [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
  ],
  radialGradients: [
    "radial-gradient(circle, #ff7e5f, #feb47b)",
    "radial-gradient(circle, #6a11cb, #2575fc)",
  ],
};

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector((state) => state.theme.theme);

  return (
    <VStack align="start" spacing="8">
      <Box>
        <Box fontWeight="bold">Solids</Box>
        <SimpleGrid columns={5} spacing={2} mt="2">
          {themes.solids.map((color, index) => (
            <Box
              key={index}
              bg={color}
              w="40px"
              h="40px"
              borderRadius="md"
              border={selectedTheme === color ? "2px solid teal" : "none"}
              cursor="pointer"
              onClick={() => dispatch(selectTheme(color))}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Box fontWeight="bold">Linear Gradients</Box>
        <SimpleGrid columns={2} spacing={2} mt="2">
          {themes.linearGradients.map((gradient, index) => (
            <Box
              key={index}
              bg={gradient}
              w="100px"
              h="40px"
              borderRadius="md"
              border={selectedTheme === gradient ? "2px solid teal" : "none"}
              cursor="pointer"
              onClick={() => dispatch(selectTheme(gradient))}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Box fontWeight="bold">Radial Gradients</Box>
        <SimpleGrid columns={2} spacing={2} mt="2">
          {themes.radialGradients.map((gradient, index) => (
            <Box
              key={index}
              bg={gradient}
              w="100px"
              h="40px"
              borderRadius="md"
              border={selectedTheme === gradient ? "2px solid teal" : "none"}
              cursor="pointer"
              onClick={() => dispatch(selectTheme(gradient))}
            />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default ThemeSelector;
