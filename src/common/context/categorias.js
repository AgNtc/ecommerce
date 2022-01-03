import {
    createContext,
    useState
} from "react";

export const CategoriaContext = createContext();

export const CategoriaProvider = ({
    children
}) => {
    const [subcategorias, setSubcategorias] = useState([]);
    return ( 
    <CategoriaContext.Provider value = {
            {
                subcategorias,
                setSubcategorias
            }
        }> 
        {
            children
        } 
        </CategoriaContext.Provider>
    )
}