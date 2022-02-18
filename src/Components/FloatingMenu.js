import { Box, Center, Grid, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaHome, FaUser, FaCode, FaMailBulk } from "react-icons/fa";

const FloatingMenu = () => {
  return (
    <Box pos="fixed" bottom={1} w="100%" padding={5}>
      <Box
        w={["100%", "100%", "40%",'40%','20%']}
        display={"flex"}
        gap={10}
        justifyContent="space-around"
        alignItems="center"
        bg="white"
        mx={"auto"}
        p={7}
        borderRadius="md"
        boxShadow="lg"
      >
        <Icon as={FaHome} w={6} h={6} />
        <Icon as={FaUser} w={6} h={6} />
        <Icon as={FaCode} w={6} h={6} />
        <Icon as={FaMailBulk} w={6} h={6} />
      </Box>
    </Box>
  );
};

export default FloatingMenu;
