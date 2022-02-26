import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { fadeDown } from "../animations/variants";

const InnerLayout = ({ children, sTitle, title, cHeight, cp }) => {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      variants={fadeDown}
      initial="initial"
      animate="animate"
      py={cp ? cp : "8rem"}
      h={cHeight}
      minH="100vh"
    >
      <Center>
        <VStack>
          <Text fontWeight="semibold" color="gray.500">
            {sTitle}
          </Text>
          <Heading fontSize="1.3rem" color="blue.300">
            {title}
          </Heading>
        </VStack>
      </Center>
      <Box>{children}</Box>
    </MotionBox>
  );
};

export default InnerLayout;
