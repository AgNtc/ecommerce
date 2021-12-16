import React, { useEffect, useState } from 'react';
import { busca } from '../config/configApi';
import '../assets/css/post.css';
import { useParams } from 'react-router-dom';

const Produtos= () =>{
    const {id} = useParams()
    const [produtos, setProdutos] = useState({})

    useEffect(()=>{
        busca(`/produtos/${id}`, setProdutos)
    }, [id])

    return (
      <main className="container flex flex--centro">
        <article className="cartao post">
          <h2 className="cartao__titulo">{produtos.nomeProduto}</h2>
          <p className="cartao__texto">{produtos.descricaoProduto}</p>
          <p className="cartao__texto">{produtos.precoProduto}</p>
        </article>
      </main>
    );
}

export default Produtos;