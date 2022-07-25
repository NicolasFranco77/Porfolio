import { Flex, Text, Image, Box, Link, Button } from '@chakra-ui/react';

const ProjectCard = ({ description, img, title, url, repoUrl }) => {
  return (
    <>
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        justifyContent="space-around"
        alignItems="center"
        mt="37px"
      >
        <Box textAlign={{ base: 'center', md: 'left' }} maxWidth={'303px'}>
          <Text fontWeight="800" fontSize={'2.5em'} pb="26px">
            {title}
          </Text>
          <Text color={'#56544e'} fontSize={'1.2em'}>
            {description}
          </Text>

          <Flex
            my="26px"
            alignItems={'center'}
            justify={{ base: 'center', md: 'start' }}
          >
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <Button variant={'outline'}>VER</Button>{' '}
            </Link>
            <Link
              fontSize={'37px'}
              href={repoUrl}
              ml="37px"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github project__logo a-link"></i>
            </Link>
          </Flex>
        </Box>

        <Flex
          className="card__right-container"
          alignItems={'center'}
          maxW="320px"
        >
          <Link w="320px" href={url} target="_blank" rel="noopener noreferrer">
            <Image src={img} alt={`${title} proyecto`} />
          </Link>
        </Flex>
      </Flex>

      <Box width={'100%'} bgColor="#1b1a17" h="3px" />
    </>
  );
};

export default ProjectCard;
