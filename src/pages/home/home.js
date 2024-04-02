import React from "react";

//css
import "./home.css";

//components
import HeaderComponent from "../../components/headerComponent/headerComponent";
import CarrosselComponent from "../../components/carrosselComponent/carrosselComponent";


function home() {
  return (
    <main>
      <HeaderComponent />
      <CarrosselComponent />
    </main>
  );
}

export default home;
