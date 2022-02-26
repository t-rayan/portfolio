import { Center, Divider, Icon, Link, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

const SocialLinks = () => {
  const MotionVStack = motion(VStack);
  return (
    <MotionVStack
      initial="initial"
      animate="animate"
      variants={fadeIn}
      pos="absolute"
      bottom={"220px"}
      left={0}
    >
      <Center height="50px">
        <Divider orientation="vertical" />
      </Center>

      <Link
        href="https://www.linkedin.com/in/narayan-thapa-7154a411b/"
        isExternal={true}
      >
        <Icon
          _hover={{ color: "blue.300" }}
          color="gray.400"
          as={FaLinkedin}
          w={5}
          h={5}
        />
      </Link>
      <Link href="https://www.facebook.com/rayan.thapa22" isExternal={true}>
        <Icon
          _hover={{ color: "blue.300" }}
          color="gray.400"
          as={FaFacebook}
          w={5}
          h={5}
        />
      </Link>
      <Link href="https://twitter.com/RayanThapa1993" isExternal={true}>
        <Icon
          _hover={{ color: "blue.300" }}
          color="gray.400"
          as={FaTwitter}
          w={5}
          h={5}
        />
      </Link>
      <Link href="https://www.instagram.com/rayan.thapa/" isExternal={true}>
        <Icon
          _hover={{ color: "blue.300" }}
          color="gray.400"
          as={FaInstagram}
          w={5}
          h={5}
        />
      </Link>
      <Link href="https://github.com/t-rayan" isExternal={true}>
        <Icon
          _hover={{ color: "blue.300" }}
          color="gray.400"
          as={FaGithub}
          w={5}
          h={5}
        />
      </Link>
      <Center height="50px">
        <Divider orientation="vertical" />
      </Center>
    </MotionVStack>
  );
};

export default SocialLinks;
