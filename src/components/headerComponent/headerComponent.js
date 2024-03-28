import React from "react";

//css
import "./headerComponent.css";

//imagens
import Logo from "../../assets/img/logo/logo-esportedasorte.png";

function headerComponent() {
  return (
    <main className="main-headerComponent">
      <div>
        <img src={Logo} alt="Logo Esporte da sorte" />
      </div>

      <div>
        <a>
          <ul className="ul-headerComponent">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Rifas</a>
            </li>
            <li>
              <a href="/">Meus Bilhetes</a>
            </li>
            <li>
              <a href="/">Contatos</a>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </a>
      </div>
    </main>
  );
}

export default headerComponent;
