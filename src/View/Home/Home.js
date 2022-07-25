import { Text, Flex, Link } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      as="section"
      textAlign="center"
      id="Home"
    >
      <Text fontSize={{ base: '90px', md: '110px' }} fontWeight="800">
        N I C O
      </Text>
      <Text
        lineHeight="0"
        as="h4"
        fontSize={{ base: '28px', md: '38px' }}
        fontWeight="400"
      >
        FRONT END DEVELOPER
      </Text>

      <Link fontSize="68px" href="#SobreMi" position="relative" top="30%">
        <i className="fa-solid fa-arrow-down home__arrow"></i>
      </Link>
    </Flex>
  );
};

export default Home;
