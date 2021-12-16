import React from 'react';
import Carousel from "react-elastic-carousel/dist";
import "./styles.css";
import Cards from "../HomeBody/Cards"
import { Typography } from '@material-ui/core';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Carrosel = ()=>{
    return (
        <>
          <Typography variant="h3" component="h3" align='center'>Produtos mais Vendidos</Typography>
          <div className="App">
            <Carousel breakPoints={breakPoints}>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </Carousel>
          </div>
        </>
      );
}

export default Carrosel;