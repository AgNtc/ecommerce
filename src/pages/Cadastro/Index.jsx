import React from "react";
import FormularioCadastro from "../../components/Forms/FormularioCadastro";
import { Container, Typography, Paper } from "@material-ui/core";
import { validarCPF, validarSenha } from "../../models/cadastro";
// import api from "../config/configApi";
import ValidacoesCadastro from "../../common/context/ValidacoesCadastro";
import "../../assets/css/cadastro.css"

function Cadastro (){
    return (
    <Container component="article" maxWidth="md" className="formCadastro">
      < Paper elevation={5}>
        <Container component="article">
          <Typography variant="h3" component="h1" align="center" className="titulo_cadastro">
              Formulário de Cadastro
        </Typography>
          < ValidacoesCadastro.Provider value={
            {
              cpf: validarCPF,
              senha: validarSenha,
              nome: validarSenha
            }
          } >
            <FormularioCadastro aoEnviar={enviarForm}/>
          </ValidacoesCadastro.Provider>
        </Container>
      </Paper>
    </Container>
    )
}

//fazer post do cadastro no servidor
    async function enviarForm(dados) {
    console.log(dados);
    // const response = await api.post("/pessoa", {
    // nome: dados.nome,
    // cpf: dados.cpf,
    // datanascimento: dados.datanascimento,
    // caminhoFoto: dados.caminhoFoto,
    };
    // return response;
    
    

export default Cadastro