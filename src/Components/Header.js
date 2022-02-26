import { Box, Flex, Text, Switch } from "@chakra-ui/react";
import React from "react";

const Header = ({ toggleTheme, theme, isLightTheme }) => {
  return (
    <Box pos="fixed" width="100%" top={0} left={0} zIndex={1}>
      <Flex
        justifyContent="space-between"
        py={5}
        px={5}
        w={["100%", "90%", "80%", "70%", "60%"]}
        color="white"
        bg={theme.ui}
        mx="auto"
        borderRadius={"lg"}
      >
        <Text fontSize="1.3rem" fontWeight="bold" color={theme.heading}>
          Thapa
        </Text>
        {/* <MoonIcon
          w={5}
          h={5}
          color="gray.500"
          onClick={toggleTheme}
          cursor="pointer"
        /> */}
        <Switch size="md" colorScheme="blue" onChange={toggleTheme} />
      </Flex>
    </Box>
  );
};

export default Header;
