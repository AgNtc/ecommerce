import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../../config/configApi';
import "../../assets/css/cards.css";


const Categorias =() => {
     const [categorias, setProdutos] = useState([]);
    useEffect(()=>{
        busca(`/categorias`, setProdutos)
    }, []);

    return (
      <Grid container justify="center">
        <div className="card_produtos">
          {categorias.map((categoria) => (
            <Link to={`/categorias/${categoria.id}`} key={categoria.id}>
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250"
                  src={`${categoria.imagemProduto}`}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}
                >
                  {categoria.nome}
                </Typography>
              </Card>
            </Link>
          ))}
        </div>
      </Grid>
    );
}
export default Categorias;