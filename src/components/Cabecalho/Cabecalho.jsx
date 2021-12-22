import React from 'react';
import { Link } from 'react-router-dom';
import imagem from '../../assets/img/logoJotinha.png';
import '../../assets/css/componentes/cabecalho.css';
import { IconButton, InputBase, Paper,} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

const Cabecalho = () => {
  return (
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone"></span>
      </div>

          <div className="icone_carrinho">
            <IconButton color="inherit" aria-label="shopping cart">
              <ShoppingCartIcon />
            </IconButton>
          </div>
      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <div>
            <li>
              <Link to="#" className="menu-item menu-item--entrar">
                Entrar
              </Link>
            </li>
            <li>
              <Link to="/cadastro" className="menu-item menu-item--cadastrar">
                Cadastrar
              </Link>
            </li>
          </div>
          <li>
            <Link to="/sobre" className="menu-item">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="menu-item">
              Contato
            </Link>
          </li>
          <li>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
            className="input--pesquisa"
          >
            <InputBase
              placeholder="O que voce está procurando"
              inputProps={{ "aria-label": "O que voce está procurando" }}
              maxRows="1"
              className="input--body"
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          </li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  ); 
};


export default Cabecalho;

// import Home from '../../paginas/Home';
// import Sobre from '../../paginas/Sobre';
// import Cadastro from '../../paginas/Cadastro';

// const pages = ['Home' , 'Sobre' , 'Cadastro'];


// eslint-disable-next-line no-lone-blocks
{/* <AppBar position="static" color="inherit">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary"
              ></IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "Black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar> */}