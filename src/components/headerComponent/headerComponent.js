import React, { useState } from "react";

//css
import "./headerComponent.css";

//bibliotecas
import { slide as Menu } from "react-burger-menu";

//imagens
import Logo from "../../assets/img/logo/logo-esportedasorte.png";

//redirecionamento do botão login
function loginRedirect() {
  window.location.href = "/login";
}

//Conteúdo Principal
function HeaderComponent() {
  // Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para abrir el menú
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="main-headerComponent">
      <div className="logo-header-container">
        <a href="/">
          <img className="logo-header" src={Logo} alt="Logo Esporte da sorte" />
        </a>
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
              <button onClick={loginRedirect}>Login</button>
            </li>
          </ul>
        </a>
      </div>

      {/* Menú de hamburguesa que se muestra solo cuando isMenuOpen es true */}
      <Menu styles={"height= 2rem ;"}
        isOpen={isMenuOpen}
        onStateChange={(state) => setIsMenuOpen(state.isOpen)}
      >
        <ul className="ul-headerComponent">
          <li>
            <a href="/">Início</a>
          </li>
          <br></br>
          <li>
            <a href="/">Rifas</a>
          </li>
          <br></br>
          <li>
            <a href="/">Meus Bilhetes</a>
          </li>
          <br></br>
          <li>
            <a href="/">Contatos</a>
          </li>
          <br></br>
          <li>
            <button onClick={loginRedirect}>Login</button>
          </li>
        </ul>
      </Menu>
    </main>
  );
}

export default HeaderComponent;
