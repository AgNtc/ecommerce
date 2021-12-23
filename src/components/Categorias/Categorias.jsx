import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../../config/configApi';
import "../../assets/css/cards.css";

// import imagem from'../../assets/img/nicolas-cage-gq.jpg';


const Categorias =({url}) => {
     const [produtos, setProdutos] = useState([]);
    useEffect(()=>{
        busca(url, setProdutos)
    }, [url]);

    return (
      <Grid container justify = "center">
        <div className="card_produtos">
          {produtos.map((produtos) => (
            <Link key={produtos.idcategoria} to={`/idcategoria/${produtos.id}`}>
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250"
                  src={`${produtos.imagemProduto}`}
                />
                <Typography gutterBottom variant="h5" component="div">
                  {produtos.nome}
                </Typography>
              </Card>
            </Link>
          ))}
        </div>
    </Grid>
      );
}
export default Categorias;