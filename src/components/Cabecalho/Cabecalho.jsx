import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/css/componentes/cabecalho.css';
import { Avatar, Badge, Button, Fade, IconButton, InputBase, Menu, MenuItem, Paper, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import logo from "../../assets/img/logo1-removebg-preview.png";

const Cabecalho = () => {
    // const { quantidadeCarrinho } = useCarrinhoContext();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone"></span>
      </div>
      <div>
        <nav className="menu-cabecalho">
          <ul className="menu-itens">
            <li>
              <div className="input--pesquisa">
                <Paper component="form">
                  <InputBase
                    placeholder="O que voce está procurando"
                    inputProps={{ "aria-label": "O que voce está procurando" }}
                    maxRows="1"
                    className="input--body"
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>
            </li>
            <div className="cabecalho-container">
              <a href="/" className="flex flex--centro">
                <img className="cabecalho__logo" src={logo} alt='logo'/>
              </a>
            </div>
            <div className="menu-itens-nav">
              <li>
                <Button className="botao-categoria">
                  <Link to="#">Categorias</Link>
                </Button>
              </li>
              <br />
              <li>
                <Button className="botao-promo">
                  <Link to="#">Promoções</Link>
                </Button>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <nav className="nav1">
        <ul className="menu-itens">
          <div className="botoes-entra--cadastrar">
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
        </ul>
        <br />
      </nav>
      <nav className="nav-perfil">
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar />
          <span className="texto-perfil">Minha Conta</span>
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <div className="icone_carrinho">
          <IconButton
            onClick={() => history.push("/carrinho")}
          >
            <Badge  color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </nav>
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