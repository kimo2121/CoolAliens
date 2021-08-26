import React from "react";
import "./Navbar.css";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/cancel.svg";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  const aboutDiv = (): void => {
    window.scrollTo(0, 605);
  };
  const priceDiv = (): void => {
    window.scrollTo(0, 1463);
  };
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-links">
          <h1 data-aos="zoom-in">CoolAliens</h1>
          <button className="link-btn">Mint</button>
          <button onClick={aboutDiv} className="link-btn">
            About Us
          </button>
          <button onClick={priceDiv} className="link-btn">
            Price
          </button>
        </div>
        <div className="external-link">
          <a href="https://twitter.com/aliens_nft">
            <Twitter />
          </a>
          <a href="/">
            <Discord />
          </a>
        </div>
      </div>
      <div className="slide-menu">
        {menu && <div className="backdrop-back"></div>}
        <Menu className="slide-menu-icon" onClick={() => setMenu(true)} />
        {menu && (
          <div
            data-aos="slide-right"
            className={menu ? "menu-content active" : "menu-content"}
          >
            <Close
              onClick={() => setMenu(false)}
              className={menu ? "close-icon" : "close-icon active"}
            />
            <button onClick={() => setMenu(false)} className="link-btn">
              Mint
            </button>
            <button onClick={() => setMenu(false)} className="link-btn">
              About Us
            </button>
            <button onClick={() => setMenu(false)} className="link-btn">
              Price
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
