import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ListaProdutos from '../../components/ListaProdutos/ListaProdutos';

const SubCategoria = () =>{
    const { subcategoria }= useParams();
    return (  
        <ListaProdutos url={`/produtos?subcategoria=${subcategoria}`} />
    );
}
export default SubCategoria;