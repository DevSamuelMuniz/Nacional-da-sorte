import React from "react";

//css
import "./carrosselComponent.css";

//biblioteca carrossel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//imagens


const CarrosselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="imagem1.jpg" alt="Imagem 1" />
      </div>
      <div>
        <img src="imagem2.jpg" alt="Imagem 2" />
      </div>
      <div>
        <img src="imagem3.jpg" alt="Imagem 3" />
      </div>
    </Slider>
  );
};

export default CarrosselComponent;
