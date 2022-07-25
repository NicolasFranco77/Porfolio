import { ChakraProvider, Container } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

//views
import Home from '../src/View/Home/Home';
import AboutMe from './View/AboutMe/AboutMe';
import ProjectsList from './View/Projects/ProjectsList';
import Footer from './View/Footer/Footer';
import Stack from './View/Stack/Stack';

const myTheme = extendTheme({
  fonts: {
    body: 'Helvetica',
  },
});

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <Container maxW="6xl">
        <Home />
        <AboutMe />
        <ProjectsList />
        <Stack />
      </Container>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
