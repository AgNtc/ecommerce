import React from 'react';
import imagem from '../assets/img/page404.png';
import '../assets/css/404.css';
const Pagina404 = ()=>{
    return (
        <main className="container flex flex--centro flex--coluna">
            <img classname="doguito-imagem" src={imagem} alt="Ilustração Ecommerce" />
            <p className="naoencontrado-texto">
                Ops, Essa página não Existe
            </p>
        </main>
    )
}

export default Pagina404;