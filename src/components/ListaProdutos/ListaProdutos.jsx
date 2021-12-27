import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { busca } from "../../config/configApi";

const ListaProdutos = ({ url }) => {
  const [produtosLista, setProdutosLista] = useState([]);

  useEffect(() => {
    busca(url, setProdutosLista);
  }, []);

  return (
    <section className="posts container">
      {produtosLista.map((produto) => (
        <Link
          className={`cartao-post cartao-post--${produto.categoriaProduto}`}
          to={`produtos/${produto.id}`}
        >
          <article key={produto.id}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                src={`${produto.imagemProduto}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {produto.nomeProduto}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {produto.precoProduto}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {produto.categoriaProduto}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {produto.descricaoProduto}
                </Typography>
              </CardContent>
            </Card>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default ListaProdutos;
