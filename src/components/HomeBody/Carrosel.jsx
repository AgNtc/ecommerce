import React from 'react';
import Carousel from "react-elastic-carousel/dist";
import "./styles.css";
import Cards from "../HomeBody/Cards"
import { Grid, Typography } from '@material-ui/core';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Carrosel = ()=>{
    return (
      <>
        <Grid direction="column" justifyContent="center" alignItems="center">
          <div className="App">
            <Carousel breakPoints={breakPoints}>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </Carousel>
          </div>
        </Grid>
        </>
      );
}

export default Carrosel;