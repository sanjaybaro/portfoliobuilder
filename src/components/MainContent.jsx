import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Input,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  Flex,
  Select,
  Image,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile, loadProfile } from "../store/profileSlice";
import ThemeSelector from "./ThemeSelector";
import Resume from "./Resume";

const MainContent = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [showResume, setShowResume] = useState(false);

  React.useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProfile({ [name]: value }));
  };

  const handleImageUpload = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(updateProfile({ [name]: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile saved!");
  };

  return (
    <Flex p="4" w="full">
      <Box w="60%">
        <Heading>Themes</Heading>
        <ThemeSelector />
        <Box mt="8">
          <Heading size="md">Edit Profile</Heading>
          <VStack align="start" mt="4" spacing="4">
            <Input
              placeholder="Name"
              value={profile.name}
              name="name"
              onChange={handleInputChange}
            />
            <Input
              placeholder="Location"
              value={profile.location}
              name="location"
              onChange={handleInputChange}
            />
            <Input
              placeholder="Profession"
              value={profile.profession}
              name="profession"
              onChange={handleInputChange}
            />
            <Textarea
              placeholder="Biography"
              value={profile.bio}
              name="bio"
              onChange={handleInputChange}
            />
            <Box display={"flex"} justifyContent={"space-evenly"}>
              <FormControl>
                <FormLabel>Background Image</FormLabel>
                <Input
                  type="file"
                  name="backgroundImage"
                  onChange={handleImageUpload}
                />
                {profile.backgroundImage && (
                  <Image
                    src={profile.backgroundImage}
                    alt="Background"
                    boxSize="100px"
                    objectFit="cover"
                    mt="2"
                  />
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Profile Image</FormLabel>
                <Input
                  type="file"
                  name="profileImage"
                  onChange={handleImageUpload}
                />
                {profile.profileImage && (
                  <Image
                    src={profile.profileImage}
                    alt="Profile"
                    boxSize="100px"
                    objectFit="cover"
                    mt="2"
                  />
                )}
              </FormControl>
            </Box>
            <FormControl mb={"3"}>
              <FormLabel>Font Style</FormLabel>
              <Select
                name="fontStyle"
                value={profile.fontStyle}
                onChange={handleInputChange}
              >
                <option value="Poppins">Poppins</option>
                <option value="Arial">Arial</option>
                <option value="Georgia">Georgia</option>
                <option value="Garamond">Garamond</option>
                <option value="Verdanal">Verdana</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Courier Newl">Courier New</option>
                <option value="Brush Script MT">Brush Script MT</option>
                <option value="Monaco">Monaco</option>
                <option value="Lucida Console">Lucida Console</option>
                <option value="Papyrus">Papyrus</option>
                <option value="Times New Roman">Times New Roman</option>
              </Select>
            </FormControl>
          </VStack>
        </Box>

        <div style={{ display: "flex", gap: "10px" }}>
          <Button colorScheme="teal" onClick={handleSave}>
            Save
          </Button>

          <Button colorScheme="blue" onClick={() => setShowResume(!showResume)}>
            {showResume ? "Hide Resume" : "Show Resume"}
          </Button>
        </div>
      </Box>

      {showResume && (
        <Box w="40%" ml="4">
          <Heading size="md">Your Portfolio</Heading>
          <Resume />
        </Box>
      )}
    </Flex>
  );
};

export default MainContent;
