import {
  Box,
  Button,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../Layouts/InnerLayout";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { fadeDown, fadeIn, staggerContainer } from "../animations/variants";

const Contact = ({ theme }) => {
  const MotionBox = motion(Box);
  return (
    <InnerLayout
      sTitle="Get in touch"
      title="Contact Me"
      cHeight={"100vh"}
      cp="7rem"
    >
      <MotionBox
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        mt={{ base: "2rem", xl: "4rem" }}
        display="grid"
        gridTemplateColumns={{ md: "auto", lg: "auto auto" }}
        alignItems="center"
        justifyContent="center"
        gap={{ base: "2rem", xl: "3rem" }}
        overflow="hidden"
      >
        <MotionBox
          variants={fadeDown}
          bg={theme.cardbg}
          shadow="sm"
          w="280px"
          borderRadius="lg"
          py="2rem"
          display="flex"
          flexDir="column"
          justifyContent="center"
          textAlign="center"
        >
          <VStack>
            <Icon
              alignSelf="center"
              w={5}
              h={5}
              color={theme.subHeading}
              as={FaEnvelope}
            />
            <Text color={theme.subHeading} fontWeight="semibold">
              Email
            </Text>
            <Text color="gray.500" fontSize="sm" fontWeight="medium">
              thapanarayan66@gmail.com
            </Text>
          </VStack>
          <HStack alignSelf="center" mt=".8rem">
            <Link href="mailto:thapanarayan66@gmail.com">
              <Button
                rightIcon={<ArrowForwardIcon />}
                size="sm"
                color="blue.400"
                variant="ghost "
              >
                write me
              </Button>
            </Link>
          </HStack>
        </MotionBox>

        <MotionBox
          variants={fadeIn}
          bg={theme.cardbg}
          shadow="sm"
          w="280px"
          borderRadius="lg"
          py="2rem"
          display="flex"
          flexDir="column"
          justifyContent="center"
          textAlign="center"
        >
          <VStack>
            <Icon
              alignSelf="center"
              w={5}
              h={5}
              color={theme.subHeading}
              as={FaWhatsapp}
            />
            <Text color={theme.subHeading} fontWeight="semibold">
              Whatsapp
            </Text>
            <Text color="gray.500" fontSize="sm" fontWeight="medium">
              +61-49-0916-558
            </Text>
          </VStack>
          <HStack alignSelf="center" mt=".8rem">
            <Button size="sm" color="blue.400" variant="ghost ">
              write me
              <ArrowForwardIcon ml={2} w={5} h={5} color="blue.400" />
            </Button>
          </HStack>
        </MotionBox>
      </MotionBox>
    </InnerLayout>
  );
};

export default Contact;
