import React from "react";
import { ReactComponent as Twitter } from "../../assets/icons/twitter2.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h1>CoolAliens community</h1>
      <div className="footer-link">
        <a href="https://twitter.com/aliens_nft">
          <Twitter />
        </a>
        <a href="/">
          <Discord />
        </a>
      </div>
    </div>
  );
};

export default Footer;
