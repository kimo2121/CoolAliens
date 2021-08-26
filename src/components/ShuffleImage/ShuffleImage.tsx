import React from "react";
import Slider from "react-slick";
import "./ShuffleImage.css";

import gif1 from "../../assets/images/gif1.png";
import gif2 from "../../assets/images/gif2.png";
import gif3 from "../../assets/images/gif3.png";
import gif4 from "../../assets/images/gif4.png";
const data: Array<string> = [gif1, gif2, gif3];
const ShuffleImage: React.FC = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 150,
    arrows: false,
    fade: true,
    autoplaySpeed: 150,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <div className="shuffle-image">
      <Slider {...settings}>
        {data.map((i, x) => (
          <div
            className={
              x === 0
                ? "slider-image background1"
                : x === 1
                ? "slider-image background2"
                : x === 2
                ? "slider-image background3"
                : x === 3
                ? ""
                : undefined
            }
            key={x}
          >
            <img className="img-container" src={i} alt="" />
          </div>
        ))}
      </Slider>
      <button className="connect-wallet">Connect Wallet</button>
    </div>
  );
};

export default ShuffleImage;
