import React, { useState } from "react";
import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../store/profileSlice";

const colors = {
  solids: [
    "#000000",
    "#ffffff",
    "#c0baba",
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#33FFF1",
  ],
  linearGradients: [
    "linear-gradient(to right, #ff7e5f, #f1cfb5)",
    "linear-gradient(to right, #8fd0e2, #0072ff)",
    "linear-gradient(to right, #a1ffce, #faffd1)",
    "linear-gradient(to right, #eeaeca,#94bbe9)",
    "linear-gradient(to right, #a0b43a,#458afc)",
    "linear-gradient(to right, #22c1c3,#263619)",
  ],
  radialGradients: [
    "radial-gradient(circle, #ff7e5f, #ddc8b6)",
    "radial-gradient(circle, #9cd3e2, #0072ff)",
    "radial-gradient(circle, #a1ffce, #faffd1)",
    "radial-gradient(circle, #bcc689, #e345fc)",
  ],
  foregroundColor: ["#000000", "#ffffff"],
};

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const [currentSelection, setCurrentSelection] = useState("solids");

  const handleThemeChange = (theme) => {
    dispatch(updateProfile({ themeColor: theme }));
  };

  return (
    <Box>
      <Box mb="4">
        <Button onClick={() => setCurrentSelection("solids")}>Solids</Button>
        <Button onClick={() => setCurrentSelection("linearGradients")}>
          Linear Gradients
        </Button>
        <Button onClick={() => setCurrentSelection("radialGradients")}>
          Radial Gradients
        </Button>
        <Button onClick={() => setCurrentSelection("foregroundColor")}>
          Foreground Color
        </Button>
      </Box>
      <Grid
        backgroundColor={"#959b9c"}
        templateColumns="repeat(5, 1fr)"
        gap={2}
        padding={5}
      >
        {colors[currentSelection].map((color, index) => (
          <GridItem
            key={index}
            bg={color}
            w="70px"
            h="70px"
            borderRadius={"50px"}
            borderColor="1px solid black"
            cursor="pointer"
            onClick={() => handleThemeChange(color)}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ThemeSelector;
