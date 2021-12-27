import { Card, CardContent, CardMedia } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/cards.css";
import { busca } from "../../config/configApi";

const Cards = () =>{
  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    busca(`/destaques`, setDestaques);
  }, []);

    return (
      <div className="card_produtos_carrosel">
        {destaques.map((destaques) =>(
        <Link key={destaques.id} to={`/produtos/${destaques.id}`}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              alt="produto"
              src={`${destaques.imagemProduto}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {destaques.nomeProduto}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {destaques.precoProduto}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {destaques.idCategoria}
              </Typography>
            </CardContent>
          </Card>
        </Link>
        ))}
      </div>
    );
}

export default Cards;
  