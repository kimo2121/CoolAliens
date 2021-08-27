import React from "react";
import HeadLine from "../HeadLine/HeadLine";
import TypographyComponent from "../Typography/Typography";
import "./RoadMap.css";

const RoadMap: React.FC = () => {
  return (
    <div className="road-map">
      <HeadLine headline="ROADMAP" />
      <div>
        <TypographyComponent className="road-map-span">
          Phase 1 - 10% Minted
        </TypographyComponent>
        <TypographyComponent className="road-map-p">
          Giveaway of 10 ALIENS on Twitter
        </TypographyComponent>
      </div>
      <div>
        <TypographyComponent className="road-map-span">
          Phase 2 - 25% Minted
        </TypographyComponent>
        <TypographyComponent className="road-map-p">
          Ethereum Giveaway for ALIENS Holders on Discord
        </TypographyComponent>
      </div>
      <div>
        <TypographyComponent className="road-map-span">
          Phase 3 - 50% Minted
        </TypographyComponent>
        <TypographyComponent className="road-map-p">
          Ethereum Giveaway for ALIENS Holders on Twitter & Discord
        </TypographyComponent>
      </div>
      <div>
        <TypographyComponent className="road-map-span">
          Phase 4 - 75% Minted
        </TypographyComponent>
        <TypographyComponent className="road-map-p">
          Holders exclusive merch and ETH giveaway
        </TypographyComponent>
      </div>
      <div>
        <TypographyComponent className="road-map-span">
          Phase 5 - 100% Minted
        </TypographyComponent>
        <TypographyComponent className="road-map-p">
          Moving 10% of Contract balance to community wallet
        </TypographyComponent>
      </div>
    </div>
  );
};

export default RoadMap;
