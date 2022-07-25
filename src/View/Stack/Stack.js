import { Flex, Box, Grid, GridItem, Image } from '@chakra-ui/react';

//logos
import react from '../../assets/LOGOS/react.png';
import materialui from '../../assets/LOGOS/material ui.svg';
import bootstrap from '../../assets/LOGOS/bootstrap-logo.png';
import git from '../../assets/LOGOS/git.png';
import github from '../../assets/LOGOS/github.png';
import firebase from '../../assets/LOGOS/firebase.png';

const Stack = () => {
  return (
    <Flex height={'calc(100vh - 80px)'} justify={'center'} alignItems="center" as="section">
      <Grid
        gridTemplateColumns={'auto auto auto'}
        rowGap="40px"
        columnGap="100px"
        justifyContent={'center'}
      >
        <GridItem>
          <Image src={react} boxSize="120px"  alt="React" />
        </GridItem>
        <GridItem>
          <Image src={materialui} boxSize="120px" alt="Material UI" />
        </GridItem>
        <GridItem>
          <Image src={bootstrap} boxSize="120px"  alt="Bootstrap" />
        </GridItem>
        <GridItem
          gridRow={2}
          gridColumn="1/4"
          justifySelf="center"
          width="200%"
        >
          <Box height="3px" bgColor="#1b1a17" />
        </GridItem>
        <GridItem>
          <Image src={git}boxSize="120px" alt="Git" />
        </GridItem>

        <GridItem>
          <Image src={github} boxSize="120px" alt="GitHub" />
        </GridItem>

        <GridItem>
          <Image src={firebase} boxSize="120px" alt="Firebase" />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Stack;
