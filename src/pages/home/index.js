import React from 'react';

import { Container, Grid } from './styles';

import Filter from '../../components/Filter';
import List from '../../components/List';

const Home = () => (
  <Container>
    <Grid>
      <Filter />
      <List />
    </Grid>
  </Container>
);

export default Home;
