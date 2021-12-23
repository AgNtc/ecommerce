import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel/dist";
import "./styles.css";
import Cards from "../HomeBody/Cards"
import { Grid, Link, Typography } from '@material-ui/core';
import { busca } from '../../config/configApi';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Carrosel = ({url})=>{
    const [destaques, setDestaques] = useState([]);

    useEffect(() => {
      busca(url, setDestaques);
    }, [url]);
    return (
      <>
        <Grid direction="column" justifyContent="center" alignItems="center">
          <div className="App">
              <Carousel breakPoints={breakPoints}>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </Carousel>
          </div>
        </Grid>
        </>
      );
}

export default Carrosel;