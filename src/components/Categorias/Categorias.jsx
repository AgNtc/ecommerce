import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../../config/configApi';
import "../../assets/css/cards.css";
import { HomeContext } from '../../common/context/home';


const Categorias =() => {
    // const {categorias, setCategorias} = useContext(HomeContext)
    const [categorias, setCategorias] = useState([]);
    useEffect(()=>{
        busca(`/categorias`, setCategorias)
    }, []);

    return (
      <Grid container justify="center">
        <div className="card_produtos">
          {categorias?.map((categoria) => (
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