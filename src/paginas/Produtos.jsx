import React, { useEffect, useState } from 'react';
import { busca } from '../config/configApi';
import { useParams,useHistory } from 'react-router-dom';
import { CardMedia, Grid } from '@material-ui/core';
import '../assets/css/post.css';

const Produtos= () =>{
    let history = useHistory();
    const {id} = useParams();
    const [produtos, setProdutos] = useState({});

    useEffect(()=>{
        busca(`/idcategoria/${id}`, setProdutos).catch(()=>{
          history.push('/404')
        })
    }, [id])

    return (
        <main className="container flex flex--centro">
          <article className="cartao post">
            <CardMedia
              component="img"
              alt="produto"
              height="140"
              src={`${produtos.imagemProduto}`}
            />
            <h2 className="cartao__titulo">{produtos.nomeProduto}</h2>
            <p className="cartao__texto">{produtos.descricaoProduto}</p>
            <p className="cartao__texto">{produtos.precoProduto}</p>
          </article>
        </main>

  );
};
  

export default Produtos;

  // produtos.map((produtos) => (
  //   <Link key={produtos.idcategoria} to={`/produtos/${produtos.idcategoria}`}>
  //     <Card variant="outlined">
  //       <CardMedia
  //         component="img"
  //         alt="green iguana"
  //         height="140"
  //         src={`${produtos.imagemProduto}`}
  //       />
  //       <CardContent>
  //         <Typography gutterBottom variant="body1" component="div">
  //           {produtos.nomeProduto}
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary">
  //           {produtos.descricaoProduto}
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary">
  //           {produtos.precoProduto}
  //         </Typography>
  //       </CardContent>
  //     </Card>
  //   </Link>
  // ))
  // );