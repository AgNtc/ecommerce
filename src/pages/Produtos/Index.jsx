import React, { useEffect, useState } from "react";
import { busca } from "../../config/configApi";
import { useParams, useHistory } from "react-router-dom";
import { Button, CardMedia, Grid } from "@material-ui/core";
import "../../assets/css/cadastro.css";

const Produtos = () => {
  let history = useHistory();
  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    busca(`/produtos/${id}`, setProdutos).catch(() => {
      history.push("/404");
    });
  }, [id]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <CardMedia
          component="img"
          alt="produto"
          height="400"
          width="100"
          src={`${produtos.imagemProduto}`}
        />
        <h2 className="cartao__titulo">{produtos.nomeProduto}</h2>
        <p className="cartao__texto">{produtos.descricaoProduto}</p>
        <p className="cartao__texto">{produtos.precoProduto}</p>
        <br />
        <Button color="primary" variant="contained" >
          Comprar
        </Button>
        <Button color="primary" variant="contained" >
          Adicionar ao Carrinho
        </Button>
      </article>
    </main>
  );
};

export default Produtos;
