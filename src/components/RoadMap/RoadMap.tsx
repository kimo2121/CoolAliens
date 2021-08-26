import React from "react";
import HeadLine from "../HeadLine/HeadLine";
import "./RoadMap.css";

const RoadMap: React.FC = () => {
  return (
    <div className="road-map">
      <HeadLine headline="ROADMAP" />
      <div>
        <span>Phase 1 - 10% Minted</span>
        <p>Giveaway of 10 ALIENS on Twitter</p>
      </div>
      <div>
        <span>Phase 2 - 25% Minted</span>
        <p>Ethereum Giveaway for ALIENS Holders on Discord</p>
      </div>
      <div>
        <span>Phase 3 - 50% Minted</span>
        <p>Ethereum Giveaway for ALIENS Holders on Twitter & Discord</p>
      </div>
      <div>
        <span>Phase 4 - 75% Minted</span>
        <p>Holders exclusive merch and ETH giveaway</p>
      </div>
      <div>
        <span>Phase 5 - 100% Minted</span>
        <p>Moving 10% of Contract balance to community wallet</p>
      </div>
    </div>
  );
};

export default RoadMap;
