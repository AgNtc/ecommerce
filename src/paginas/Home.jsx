import { Grid, Typography } from '@material-ui/core';
import React from 'react';
// import Cards from '../components/HomeBody/Cards';
import Carrosel from '../components/HomeBody/Carrosel';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

const Home = () => {
  return (
    <>
    <div>
      <Typography variant="h3" component="h3" align="center">
        Produtos
      </Typography>
    </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ListaProdutos  url={'/produtos'}/>
        <div>
          <Carrosel />
        </div>
      </Grid>
    </>
  );
}

export default Home
