// import React, { useEffect, useState } from 'react';
// import { busca } from '../../config/configApi';
// import '../../assets/blog.css';
// import { Link } from 'react-router-dom';

// const ListaCategorias= () =>{
//     const [categorias, setCategorias]= useState([]);

//     useEffect(()=>{
//         busca()
//     }, [`/categorias`, setCategorias])
//     return (  
//         <ul className='lista-categoria container flex'>
//             {
//                categorias.map((categoria)=>{
//                 <Link to={`categoria/${categoria.id}`}>
//                     <li className={`lista-categorias__categorias lista-categorias__categoria--${categoria.id}`}>
//                         {categoria.nome}
//                     </li>
//                 </Link>
//                })

//             }
//         </ul>
//     );
// }

// export default ListaCategorias;