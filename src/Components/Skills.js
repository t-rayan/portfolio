import { Box, Center, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Skills = ({ theme }) => {
  return (
    <Box display="grid " alignItems="center" justifyContent="center" mt="5rem">
      <Text textAlign="center" color={theme.subHeading} fontWeight="semibold">
        My Skills
      </Text>
      <Box
        display="grid"
        gridTemplateColumns={{ md: "1fr", lg: "1fr 1fr" }}
        mt={"4rem"}
        gap="5rem"
      >
        <Box
          w="320px"
          minH="200px"
          bg={theme.cardbg}
          borderRadius="lg"
          p={"2rem"}
          shadow="sm"
          fontSize=".9rem"
          fontWeight="semibold"
        >
          <Center>
            <Text color="blue.400" fontSize="1.1rem" fontWeight="semibold">
              Frontend
            </Text>
          </Center>
          <SimpleGrid columns={2} spacing={10} mt={7}>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">HTML</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">CSS</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">JavaScript</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">Chakra UI</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">React</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">Git</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">Figma</Text>
            </HStack>
          </SimpleGrid>
        </Box>
        <Box
          shadow="sm"
          w="320px"
          bg={theme.cardbg}
          borderRadius="lg"
          p={"2rem"}
          fontSize=".9rem"
          fontWeight="semibold"
        >
          <Center>
            <Text color="blue.400" fontSize="1.1rem" fontWeight="semibold">
              Backend
            </Text>
          </Center>
          <SimpleGrid columns={2} spacing={10} mt={7}>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">Node Js</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">Express Js</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">Mongo Db</Text>
            </HStack>
            <HStack>
              <CheckCircleIcon color="blue.400" />
              <Text color="gray.400">Api Dev</Text>
            </HStack>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
