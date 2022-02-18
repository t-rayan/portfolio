import { Box } from '@chakra-ui/react';
import './App.css';
import About from './Components/About';
import FloatingMenu from './Components/FloatingMenu';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <Box h='100vh' w={'100vw'} pos='relative' >
      <Box w={['90%','90%','80%','70%']}  mx='auto'>
      <Header />
      <HeroSection />
      <About />

      </Box>
      <FloatingMenu />
    </Box>
  );
}

export default App;
