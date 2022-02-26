import { useContext } from "react";
import { Box } from "@chakra-ui/react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FloatingMenu from "./Components/FloatingMenu";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import { ThemeContext } from "./Context/ThemeContext";
import { Routes, Route } from "react-router-dom";

function App() {
  const { isLightTheme, defaultTheme, toggleTheme } = useContext(ThemeContext);
  const { lightTheme, darkTheme } = defaultTheme;

  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <Box h="100%" w={"100%"} bg={theme.ui} pos="relative">
      <Header
        isLightTheme={isLightTheme}
        toggleTheme={toggleTheme}
        theme={theme}
      />

      <Box w={["90%", "90%", "80%", "70%", "55%"]} mx="auto">
        <Routes>
          <Route path="/" element={<HeroSection theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
        {/* <HeroSection theme={theme} />
        <About theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} /> */}
      </Box>
      <FloatingMenu theme={theme} isLightTheme={isLightTheme} />
    </Box>
  );
}

export default App;
