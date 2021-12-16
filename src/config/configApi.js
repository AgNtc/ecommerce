import axios from 'axios';
export const api = axios.create({
    baseURL: "https://61ba20ba48df2f0017e5a923.mockapi.io/ecomerce/"
});

export const busca = async (url, setDado)=>{
    const resposta = await api.get(url)
    setDado(resposta.data)
};