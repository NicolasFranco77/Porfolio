import { Flex, Box, Grid, GridItem } from '@chakra-ui/react';

//logos
import react from '../../assets/LOGOS/react.png';
import materialui from '../../assets/LOGOS/material ui.svg';
import bootstrap from '../../assets/LOGOS/bootstrap-logo.png';
import git from '../../assets/LOGOS/git.png';
import github from '../../assets/LOGOS/github.png';
import firebase from '../../assets/LOGOS/firebase.png';

const Stack = () => {
  return (
    <Flex
      height={'calc(100vh - 80px)'}
      justify={'center'}
      alignItems="center"
      as="section"
    >
      <Grid
        gridTemplateColumns={'auto auto auto'}
        rowGap="40px"
        columnGap="100px"
        justifyContent={'center'}
      >
        <GridItem>
          <img src={react} width="120" alt="React" />
        </GridItem>
        <GridItem>
          <img src={materialui} width="120" alt="Material UI" />
        </GridItem>
        <GridItem>
          <img src={bootstrap} width="120" alt="Bootstrap" />
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
          <img src={git} width="120" alt="Git" />
        </GridItem>

        <GridItem>
          <img src={github} width="120" alt="GitHub" />
        </GridItem>

        <GridItem>
          <img src={firebase} width="90" alt="Firebase" />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Stack;
