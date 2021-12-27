import { Button} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Categorias from '../components/Categorias/Categorias';
import ListaProdutos from '../components/ListaProdutos/ListaProdutos';
import { busca } from '../config/configApi';
import SubCategoria from './SubCategoria';

const ListaCategorias= () =>{
    const {id} = useParams()
    const { url,path} = useRouteMatch()
    console.log(url);
    const [subcategorias, setSubcategorias ]= useState([]);

    useEffect(()=>{
        busca(`/categorias/${id}`, (categoria)=>{
            setSubcategorias(categoria.subcategorias)
        })
    }, [id])
    return (
      <>
        <Categorias />
        <div className="container">
          <h2 className="titulo-pagina">
              Produtos da Categoria {id}
          </h2>
        </div>
        <ul className="lista-categorias container flex">
          {subcategorias.map((subcategoria) => (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              <Link to={`${url}/${subcategoria}`}>
                <Button size="medium" variant="outlined" color="primary">
                  {subcategoria}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <Switch>
          <Route exact path={`${path}/`}>
            <ListaProdutos url={`/produtos?categoriaProduto=${id}`} />
          </Route>
          <Route path={`${path}/:subcategoria`}>
            <SubCategoria />
          </Route>
        </Switch>
      </>
    );
}

export default ListaCategorias;