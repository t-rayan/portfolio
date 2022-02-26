import { Box, Center, Icon } from "@chakra-ui/react";
import React from "react";
import { FiHome, FiUser, FiGrid, FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const FloatingMenu = ({ theme, isLightTheme }) => {
  const activeLinkStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#5995C7" : "transparent",
      color: isActive ? "#fff" : "#ccc",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  };
  return (
    <Box pos="fixed" bottom={5} w="100%" padding={1}>
      <Box
        w={{ base: "90%", sm: "70%", md: "40%", lg: "40%", xl: "20%" }}
        display={"grid"}
        alignSelf="center"
        justifySelf="center"
        gridTemplateColumns="auto auto auto auto"
        justifyContent="space-between"
        alignItems="center"
        bg={isLightTheme ? "whiteAlpha.900" : "blackAlpha.600"}
        mx={"auto"}
        p={5}
        borderRadius="xl"
        boxShadow="md"
      >
        <NavLink style={activeLinkStyle} to="/">
          <Center>
            <Icon as={FiHome} w={6} h={6} />
          </Center>
        </NavLink>
        <NavLink style={activeLinkStyle} to="/about">
          <Icon as={FiUser} w={6} h={6} />
        </NavLink>
        <NavLink style={activeLinkStyle} to="/projects">
          <Icon as={FiGrid} w={6} h={6} />
        </NavLink>
        <NavLink style={activeLinkStyle} to="/contact">
          <Icon as={FiMail} w={6} h={6} />
        </NavLink>
      </Box>
    </Box>
  );
};

export default FloatingMenu;
