import {React} from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Cadastro from './paginas/Cadastro';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Produtos from './paginas/Produtos'
import ListaCategorias from './paginas/ListaCategorias';

function App() {

  return (
  <Router>
    <Cabecalho/>
    <Switch>
      <Route exact path='/'>
        <Home/> 
      </Route>
      <Route path='/sobre'>
        <Sobre/>
      </Route>
      <Route path='/categorias/:id'>
        <ListaCategorias />
      </Route>
      <Route path='/Cadastro'>
        <Cadastro/>
      </Route>
      <Route path='/produtos/:id'>
        <Produtos />
      </Route>
      <Route>
        <Pagina404/>
      </Route>
    </Switch>
  </Router>
  )
}

export default App



