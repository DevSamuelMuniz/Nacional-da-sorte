import React from "react";

//css
import './login.css';

//components
import HeaderComponent from "../../components/headerComponent/headerComponent";

function login(){
    return(
        <main className="main-login">
            <HeaderComponent />
        </main>
    );
}

export default login;