import { Grid } from '@material-ui/core';
import React from 'react';
import Cards from '../components/Cards/Cards';

const Home = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Grid>
  );
}

export default Home
