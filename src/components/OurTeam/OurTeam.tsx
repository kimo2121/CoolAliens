import React from "react";
import HeadLine from "../HeadLine/HeadLine";
import "./OurTeam.css";
import gif1 from "../../assets/images/gif1.png";
import gif2 from "../../assets/images/gif2.png";
import gif3 from "../../assets/images/gif3.png";

const OurTeam: React.FC = () => {
  return (
    <div className="our-team">
      <HeadLine headline="Our Team" />
      <div className="team-wrapper">
        <div>
          <img src={gif3} alt="" />
          <p>Pixie Beard</p>
          <span>Founder</span>
        </div>
        <div>
          <img src={gif2} alt="" />
          <p>John D0E</p>
          <span>Head of marketing</span>
        </div>
        <div>
          <img src={gif1} alt="" />
          <p>Nico Jones</p>
          <span>Developer</span>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
