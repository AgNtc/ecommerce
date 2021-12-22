import { Grid, Typography } from '@material-ui/core';
import React from 'react';
// import Cards from '../components/HomeBody/Cards';
import Carrosel from '../components/HomeBody/Carrosel';
import Categorias from '../components/Categorias/Categorias';
// import ListaCategorias from '../components/Categorias/ListaCategorias';

const Home = () => {
  return (
    <>
      <div>
        <Typography variant="h4" component="h5" align="center">
        </Typography>
        {/* <ListaCategorias /> */}
        {/* <Categorias url={"/produtos"} /> */}
      </div>
      <div>
        <Carrosel />
      </div>
    </>
  );
}

export default Home
