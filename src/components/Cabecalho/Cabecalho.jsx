import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/componentes/cabecalho.css';
import { Avatar, Button, Fade, IconButton, InputBase, Menu, MenuItem, Paper, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import logo from "../../assets/img/logoJota.png";

const Cabecalho = () => {
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
      <div className="cabecalho-container">
        <a href="/" className="flex flex--centro">
          <img className="cabecalho__logo" src={logo} alt="Logo Doguito" />
          <div className="icone_carrinho">
            <IconButton color="inherit" aria-label="shopping cart">
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </a>
      </div>
      <nav className="menu-cabecalho">
        <ul className="menu-itens">
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
          <li>
            <Link to="#" className="menu-item">
              Categorias
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className="menu-item">
              Cadastrar
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className="menu-item">
              Cadastrar
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className="menu-item">
              Cadastrar
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className="menu-item">
              Cadastrar
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav1">
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
        </ul>
        <br />
        <nav>
          <div>
            <Button
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar /><span className="nav-perfil">Minha Conta</span>
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
          </div>
        </nav>
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