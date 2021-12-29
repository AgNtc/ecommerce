import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState, useContext } from 'react';
import ValidacoesCadastro from "../../common/context/ValidacoesCadastro";
import useErros from '../../hooks/useErros';
import "../../assets/css/cadastro.css";

function DadosLogin({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, enviaReq] = useErros(validacoes);


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (enviaReq()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="nome"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
      >
        Próximo
      </Button>
    </form>
  );
}

export default DadosLogin;