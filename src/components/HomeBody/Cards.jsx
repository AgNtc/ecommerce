import { Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/cards.css";

const Cards = () =>{
    return (
      <div className="card_produtos_carrosel">
            <Card variant="outlined">
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Categoria 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
      </div>
    );
}

export default Cards;