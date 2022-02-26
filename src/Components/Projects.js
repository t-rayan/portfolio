import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import InnerLayout from "../Layouts/InnerLayout";
import { projects } from "../data/projects";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { staggerContainer } from "../animations/variants";

const Projects = ({ theme }) => {
  const MotionBox = motion(Box);

  const fullstackProjects = projects.filter(
    (project) => project.category === "Fullstack"
  );
  const frontendProjects = projects.filter(
    (project) => project.category === "Frontend"
  );
  const uiProjects = projects.filter((project) => project.category === "UI/UX");
  return (
    <InnerLayout sTitle="My Works" title="Recent Projects" cHeight="100%">
      <Box mt="3rem">
        <Tabs
          variant="solid-rounded"
          colorScheme="messenger"
          align="center"
          size="sm"
        >
          <TabList>
            <Tab>All</Tab>
            <Tab>Fullstack</Tab>
            <Tab>Frontend</Tab>
            <Tab>UI/UX</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MotionBox
                mt="2rem"
                display="grid"
                gridTemplateColumns={{
                  sm: "auto",
                  md: "1fr 1fr",
                  lg: "1fr 1fr",
                  xl: "1fr 1fr 1fr",
                }}
                gap="3rem"
                justifyContent="center"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {projects?.map((project) => (
                  <SingleProject
                    key={project.id}
                    project={project}
                    theme={theme}
                  />
                ))}
              </MotionBox>
            </TabPanel>
            <TabPanel>
              <Box mt="2rem" display="grid" justifyContent="center">
                {fullstackProjects.map((project) => (
                  <SingleProject
                    key={project.id}
                    project={project}
                    theme={theme}
                  />
                ))}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box
                mt="2rem"
                display="grid"
                gridTemplateColumns={{
                  sm: "auto",
                  md: "1fr 1fr",
                  lg: "1fr 1fr",
                  xl: "1fr 1fr 1fr",
                }}
                gap="3rem"
                justifyContent="center"
              >
                {frontendProjects.map((project) => {
                  return (
                    <SingleProject
                      key={project.id}
                      project={project}
                      theme={theme}
                    />
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box mt="2rem" display="grid" justifyContent="center">
                {uiProjects.map((project) => {
                  return (
                    <SingleProject
                      key={project.id}
                      project={project}
                      theme={theme}
                    />
                  );
                })}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </InnerLayout>
  );
};

export default Projects;
