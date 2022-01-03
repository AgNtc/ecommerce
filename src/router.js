import {
    React
} from 'react';
import './assets/css/base/base.css';
import {
    BrowserRouter, Route,
    Switch
} from 'react-router-dom'

import Home from './pages/Home/Index';
import Sobre from './pages/Sobre/Index';
import Cadastro from './pages/Cadastro/Index';
import Pagina404 from './pages/Pagina404/Index';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Produtos from './pages/Produtos/Index';
import ListaCategorias from './pages/ListaCategoria/Index';
import { CategoriaProvider } from './common/context/categorias';
import { CarrinhoProvider } from './common/context/pagamento';

function Routes() {
return ( 
<BrowserRouter>
    <Cabecalho/>
        <Switch >
            <Route exact path = '/' >
                <Home/>
            </Route>
            <Route path = '/sobre' >
                < Sobre/>
            </Route> 
            <CategoriaProvider>
                <Route path = '/categorias/:id' >
                    <ListaCategorias/>
                </Route>
                <Route path = '/produtos/:id' >
                    <Produtos />
                </Route>
            </CategoriaProvider>
            <Route path = '/Cadastro' >
                <Cadastro/>
            </Route>
            <Route >
                <Pagina404/>
            </Route> 
        </Switch>
</BrowserRouter>
    )
}

export default Routes