import { Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import imagem from "../../assets/img/app-para-acompanhar-resultados-de-futebol.jpg";
import "../../assets/css/cards.css";

const Cards = () =>{
    return (
      <div className="card_produtos_carrosel">
            <Card variant="outlined">
              <CardMedia
                component="img"
                alt="produto"
                image={imagem}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Categoria 1
                </Typography>
              </CardContent>
            </Card>
      </div>
    );
}

export default Cards;