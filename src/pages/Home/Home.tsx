import React from "react";
import About from "../../components/About/About";
import FAQ from "../../components/FAQ/FAQ";
import Mint from "../../components/Mint/Mint";
import OurTeam from "../../components/OurTeam/OurTeam";
import RoadMap from "../../components/RoadMap/RoadMap";
import ShuffleImage from "../../components/ShuffleImage/ShuffleImage";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <ShuffleImage />
      <About />
      <div className="price-div">
        <h1>Every Cool Alien cost 0.02 ETH + gas fee</h1>
        <h1>0.02 ETH</h1>
      </div>
      <Mint />
      <RoadMap />
      <OurTeam />
      <FAQ />
    </div>
  );
};

export default Home;
