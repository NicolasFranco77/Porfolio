import { Text, Flex, Link, Box, Button } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

const AboutMe = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      as="section"
      height={{ base: '', md: '75vh' }}
      justify="space-around"
      alignItems={{ base: 'center', md: 'start' }}
      pt={{ base: '0', md: '187px' }}
      id="SobreMi"
    >
      <Flex
        pt="83px"
        w={{ base: '100%', md: '40%' }}
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <Text fontSize="34px">Hola! me llamo</Text>
          <Text as="div" fontSize="40px" fontWeight="800" pt="17px">
            <Typewriter
              as="p"
              options={{
                strings: ['AUGUSTO', 'NICOLAS', 'ADRIAN', 'FRANCO'],
                autoStart: true,
                loop: true,
                delay: '100',
                pauseFor: '400',
              }}
            />
          </Text>

          <Text pt="27px" fontSize="16px" fontWeight="800" color="#56544e">
            Sí, muchos nombres...
          </Text>

          <Flex fontSize="27px" justifyContent="space-between" pt="27px">
            <Link
              href="https://drive.google.com/file/d/1Qi8hGJ9HjvP6ZhZBJweBms0CIdqIczIP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">CV</Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nicolasfranco77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in a-link"></i>
            </Link>
            <Link
              href="https://github.com/NicolasFranco77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github a-link"></i>
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Box
        height={{ base: '3px', md: '468px' }}
        bgColor="black"
        w={{ base: '90%', md: '3px' }}
        my={{ base: '27px', md: '0' }}
      />

      <Box
        pt={{ base: '0', md: '83px' }}
        w={{ base: '80%', md: '40%' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text fontSize="26px" fontWeight="800" pb="22px">
          SOBRE MI
        </Text>
        <Text fontSize="25px" pb="40px">
          Realizardor audiovisual transicionando hacia el desarrollo web.
        </Text>
        <Text fontSize="25px" pb="40px">
          Me gusta enfrentarme a problemas y crear soluciones que se vean bien.
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutMe;
