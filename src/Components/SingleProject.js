import { Box, Button, ButtonGroup, Link, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

const SingleProject = ({ project, theme }) => {
  const MotionBox = motion(Box);
  const { title, appLink, codeLink, stack } = project;
  return (
    <MotionBox
      w="270px"
      borderRadius="lg"
      py="3rem"
      bg={theme.cardbg}
      boxShadow="sm"
      display="grid"
      justifyContent="center"
      alignItems="center"
      variants={fadeIn}
    >
      <Text fontSize=".8rem" color={theme.subHeading}>
        {stack}
      </Text>
      <Text
        mt={2}
        fontSize="1rem"
        fontWeight="semibold"
        color={theme.subHeading}
      >
        {title}
      </Text>
      <ButtonGroup mt="3rem">
        <Link href={appLink} isExternal={true}>
          <Button
            rightIcon={<ArrowForwardIcon />}
            variant="outline"
            colorScheme="blue"
            size="sm"
            _hover={{ bg: "blue.300", border: "none" }}
          >
            Demo
          </Button>
        </Link>
        <Link href={codeLink} isExternal={true}>
          <Button
            rightIcon={<ArrowForwardIcon />}
            variant="ghost"
            colorScheme="blue"
            size="sm"
            _hover={{ bg: "blue.300", shadow: "md", border: "none" }}
          >
            Code
          </Button>
        </Link>
      </ButtonGroup>
    </MotionBox>
  );
};

export default SingleProject;
