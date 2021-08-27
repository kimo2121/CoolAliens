import React from "react";
import "./About.css";
import gif2 from "../../assets/images/gif2.png";
import TypographyComponent from "../Typography/Typography";

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h1>What is cool Aliens?</h1>
        <TypographyComponent className="about-text-p">
          <strong>Cool Aliens</strong> is a cool degenerative collection on
          Ethereum Mainnet. The collection consists of 10,000 randomly generated
          <strong>ALIENS</strong> that are created from random hats, glasses,
          shirts, ...
        </TypographyComponent>
        <TypographyComponent className="about-text-p">
          Cool Aliens is a <strong>community of crypto enthusiasts</strong> who
          wanna make NFT much cooler, we are not about money, we are about fun.
          We wanna help a lot of people to make their own dope collectibles like
          this, and this will be possible with help of Governance.
        </TypographyComponent>
        <TypographyComponent className="about-text-p">
          We will support other collectibles with a multi-signature community
          wallet and will curate the launch step by step.
        </TypographyComponent>
      </div>
      <div className="about-card">
        <p>
          <img src={gif2} alt="" />
        </p>
        <span>Cool Aliens</span>
        <h3>Cool Alien #1000</h3>
      </div>
    </div>
  );
};

export default About;
