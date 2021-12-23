import React, { useEffect, useState } from 'react';
import { busca } from '../../config/configApi';
import '../../assets/css/blog.css';
import { Link } from 'react-router-dom';

const ListaCategorias= () =>{
    const [categorias, setCategorias]= useState([]);
    useEffect(()=>{
        busca(`/categorias`, setCategorias);
    }, [])
    return (  
        <ul className='lista-categoria container flex'>
            {
            }
        </ul>
    );
}

export default ListaCategorias;