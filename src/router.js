import {
    React
} from 'react';
import './assets/css/base/base.css';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom/cjs/react-router-dom.min';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';
import Pagina404 from './pages/Pagina404';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Produtos from './pages/Produtos'
import ListaCategorias from './pages/ListaCategorias';
import { UsuarioContex } from './common/context/usuario';

function Routes() {
const 
return ( 
<BrowserRouter>
    <Cabecalho/>
        <Switch >
            <Route exact path = '/' >
                <UsuarioContex.Provider value={{}}/>
                <Home/>
            </Route>
            <Route path = '/sobre' >
            <   Sobre/>
            </Route> 
            <Route path = '/categorias/:id' >
                <ListaCategorias/>
            </Route>
            <Route path = '/Cadastro' >
                <Cadastro/>
            </Route>
            <Route path = '/produtos/:id' >
                <Produtos/>
            </Route>
            <Route >
                <Pagina404/>
            </Route> 
        </Switch>
</BrowserRouter>
    )
}

export default Routes
