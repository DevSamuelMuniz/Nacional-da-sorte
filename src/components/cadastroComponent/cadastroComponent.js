import React from "react";

//css
import "./cadastroComponent.css";

//imagens
import Logo from "../../assets/img/logo/logo-esportedasorte.png";

function cadastroComponent() {
  return (
    <main className="main-cadastroComponent">
      <div className="img-ctn">
        <img className="img-logo" src={Logo} alt="Logo Nacional da sorte" />
      </div>

      <div className="content-cadastroComponent">
        <div className="banner-cadastro">
          <h1 className="h1-cadastro">Cadastre-se</h1>

          <form>
            <label>Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
            ></input>

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
            ></input>

            <label>Telefone</label>
            <input
              type="phone"
              id="senha"
              name="senha"
              placeholder="(88) 8.8888-8888"
            ></input>

            <label>senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Sua senha"
            ></input>

            <button className="button-cadastro">Cadastrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default cadastroComponent;
