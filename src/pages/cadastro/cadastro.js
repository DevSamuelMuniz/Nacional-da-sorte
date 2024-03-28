import React from "react";

//css
import "./cadastro.css";

//components
import HeaderComponent from "../../components/headerComponent/headerComponent";
import CadastroComponent from "../../components/cadastroComponent/cadastroComponent";

function cadastro() {
  return (
    <main>
      <HeaderComponent />
      <CadastroComponent />
    </main>
  );
}

export default cadastro;
