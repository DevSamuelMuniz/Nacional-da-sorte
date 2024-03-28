import React from "react";

//css
import "./loginComponent.css";

//imagens
import Logo from "../../assets/img/logo/logo-esportedasorte.png";

function loginComponent() {
  return (
    <main className="main-loginComponent">
      <div className="img-ctn">
        <img className="img-logo" src={Logo} alt="Logo Nacional da sorte" />
      </div>

      <div className="content-loginComponent">
        <div className="banner-login">
          <h1 className="h1-login">Login</h1>

          <form>
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
            ></input>

            <label>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Sua senha"
            ></input>

            <button className="button-login">Entrar</button>
          </form>

          <p>Ainda não tem Login?</p>
          <a className="cadastro-login" href="/cadastro">
            Cadastre-se
          </a>
        </div>
      </div>
    </main>
  );
}

export default loginComponent;
