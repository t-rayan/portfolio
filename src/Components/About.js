import { Box, Button, Link, Text } from "@chakra-ui/react";
import React from "react";
import profileImg from "../Assets/images/profileimg.svg";
import InnerLayout from "../Layouts/InnerLayout";
import Skills from "./Skills";

const About = ({ theme }) => {
  return (
    <InnerLayout sTitle="My Intro" title="About Me" cp="8rem">
      <Box
        display="grid"
        gridTemplateColumns={{ md: "1fr", lg: "1fr 1fr", xl: ".8fr 1fr" }}
        alignItems="center"
        justifyContent={{ md: "center", lg: "space-around" }}
        gap="3rem"
        mt={{ base: "1.5rem", lg: "7rem" }}
      >
        <Box>
          <Text
            color={theme.subHeading}
            fontWeight="medium"
            lineHeight={"8"}
            fontSize=".9rem"
          >
            Hello, I'm a Nepal based web developer. Web design and development
            are two of my favourite things to do. I adore developing websites
            and web applications that are dynamic and interactive. Learning new
            web technologies is one of my favourite pastimes.
          </Text>
          <Link
            href={require("../narayan_resume.pdf")}
            download="narayan_resume"
          >
            <Button
              mt="1rem"
              variant="solid"
              size="md"
              bg="blue.500"
              colorScheme="blue"
            >
              Download CV
            </Button>
          </Link>
        </Box>
        <Box>
          <img w="100%" src={profileImg} alt="profile img" />
        </Box>
      </Box>

      <Skills theme={theme} />
    </InnerLayout>
  );
};

export default About;
