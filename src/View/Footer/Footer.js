import { Box, Container, Stack, Flex, Button, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box mt="10vh" borderTop="1px solid" py="14" as="section">
      <Stack spacing={6}>
        <Container >
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
        </Container>
      </Stack>
    </Box>
  );
}
