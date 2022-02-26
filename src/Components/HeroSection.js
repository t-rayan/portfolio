import { Box, Button, Heading, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import heroImg from "../Assets/images/heroimg.svg";
import SocialLinks from "./SocialLinks";

import { motion } from "framer-motion";
import { fadeDown } from "../animations/variants";

const HeroSection = ({ theme }) => {
  const MotionBox = motion(Box);
  return (
    <Box
      color={theme.subHeading}
      display="grid"
      gridTemplateRows=".3fr 20rem"
      pos="relative"
      h="100vh"
      textAlign="center"
      justifyContent="center"
      pt={{ base: "10rem", xl: "14rem" }}
    >
      <MotionBox initial="initial" animate="animate" variants={fadeDown}>
        <Text fontWeight="black" color={theme.heading}>
          Hello, i am
        </Text>
        <Heading fontSize="2.5rem" my={3} color={theme.heading}>
          Narayan Thapa
        </Heading>
        <Text fontWeight="black" color={theme.heading}>
          Web Developer
        </Text>

        <HStack mt={10} spacing={5} justifyContent="center">
          <Link
            href={require("../narayan_resume.pdf")}
            download="narayan_resume"
          >
            <Button variant="solid" size="md" bg="blue.500" colorScheme="blue">
              Download CV
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              size="md"
              variant="outline"
              _hover={{ bg: "none", border: "2px", borderColor: "blue.300" }}
            >
              Hire Me
            </Button>
          </Link>
        </HStack>
      </MotionBox>

      <MotionBox
        display="flex"
        alignItems="center"
        px={4}
        marginTop="1rem"
        width={"300px"}
        initial="initial"
        animate="animate"
        variants={fadeDown}
      >
        <img width="100%" src={heroImg} alt="hero_img" />
      </MotionBox>

      <SocialLinks />
    </Box>
  );
};

export default HeroSection;
