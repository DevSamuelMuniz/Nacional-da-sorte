import React from "react";

//css
import "./carrosselComponent.css";

//biblioteca carrossel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//imagens
import Image1 from "../../assets/img/carrossel/image1.png";
import Image2 from "../../assets/img/carrossel/image2.png";

const CarrosselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider className="ctn-carrossel" {...settings}>
      <div className="ctn-carrossel">
        <img className="img-carrossel" src={Image1} alt="Imagem 1" />
      </div>

      <div className="ctn-carrossel">
        <img className="img-carrossel" src={Image2} alt="Imagem 1" />
      </div>

      <div className="ctn-carrossel">
        <img className="img-carrossel" src={Image1} alt="Imagem 1" />
      </div>

      <div className="ctn-carrossel">
        <img className="img-carrossel" src={Image2} alt="Imagem 1" />
      </div>
    </Slider>
  );
};

export default CarrosselComponent;
