import React from "react";

//css
import "./login.css";

//components
import HeaderComponent from "../../components/headerComponent/headerComponent";
import LoginComponent from "../../components/loginComponent/loginComponent";

function login() {
  return (
    <main className="main-login">
      <HeaderComponent />
      <LoginComponent />
    </main>
  );
}

export default login;
