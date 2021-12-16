import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../../config/configApi';
import "../../assets/css/cards.css";

// import imagem from'../../assets/img/nicolas-cage-gq.jpg';


const ListaProdutos =({url}) => {
    const [produtos, setProdutos] = useState([]);
    useEffect(()=>{
        busca(url, setProdutos)
    }, [url]);

    return (
      <div className="card_produtos">
        {produtos.map((produtos) => (
          <Link key={produtos.id} to={`/produtos/${produtos.id}`}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                src={`${produtos.imagemProduto}`}
              />
              <Typography gutterBottom variant="h5" component="div">
                {produtos.categoriaProduto}
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {produtos.nomeProduto}
                </Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
                <Typography variant="body2" color="text.secondary">
                  {produtos.precoProduto}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    );
}
export default ListaProdutos;