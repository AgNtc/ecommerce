import { Typography } from '@material-ui/core';
import React from 'react';
import Carrosel from '../components/HomeBody/Carrosel';
import Categorias from '../components/Categorias/Categorias';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';

const Home = () => {
  return (
    <main>
      <div>
        <Typography variant="h4" component="h5" align="center">
          Destaques
        </Typography>
        <br />
        <Carrosel url={"/destaques"} />
      </div>
      <div>
        <Typography variant="h4" component="h5" align="center">
          Categorias
        </Typography>
        <Categorias url={"/categorias"} />
      </div>
      {/* <div>
        <Typography variant="h4" component="h5" align="center">
          Produtos
        </Typography>
        <ListaProdutos url={"/produtos"} />
      </div> */}
    </main>
  );
}

export default Home
