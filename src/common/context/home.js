import { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children}) =>{
        const [categorias, setCategorias] = useState([]);
        const [destaques, setDestaques] = useState([]);
    return (
        <HomeContext.Provider value={{categorias, setCategorias, destaques, setDestaques}}>
            {children}
        </HomeContext.Provider>
    )
}