//dependencias react
import React, { useEffect, useContext } from 'react';
import { Route , Link, Switch } from 'react-router-dom';
import { BrowserRouter, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

//css e material ui
import { Button} from '@material-ui/core';


//injeção de dependencia
import Categorias from '../../components/Categorias/Categorias';
import ListaProdutos from '../../components/ListaProdutos/ListaProdutos';
import { busca } from '../../config/configApi';
import SubCategoria from '../SubCategoria/Index';
import { CategoriaContext } from '../../common/context/categorias';


const ListaCategorias= () =>{
    const {id} = useParams()
    const { url,path} = useRouteMatch()
    const {subcategorias, setSubcategorias} = useContext(CategoriaContext);

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
         <BrowserRouter> 
          <Route exact path={`${path}/`}>
            <ListaProdutos url={`/produtos?categoriaProduto=${id}`} />
          </Route>
          <Route path={`${path}/:subcategoria`}>
            <SubCategoria />
          </Route>
          </BrowserRouter>
        </Switch>
      </>
    );
}

export default ListaCategorias;