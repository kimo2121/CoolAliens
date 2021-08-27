import React, { useState } from "react";
import HeadLine from "../HeadLine/HeadLine";
import "./FAQ.css";
import { IoIosArrowDown } from "react-icons/io";
import TypographyComponent from "../Typography/Typography";
const FAQ: React.FC = () => {
  const [state1, setstate1] = useState(false);
  const [state2, setstate2] = useState(false);
  const [state3, setstate3] = useState(false);

  const showHideDiv1 = (): void => {
    setstate2(false);
    setstate3(false);
    setstate1(!state1);
  };
  const showHideDiv2 = (): void => {
    setstate1(false);
    setstate3(false);
    setstate2(!state2);
  };
  const showHideDiv3 = (): void => {
    setstate2(false);
    setstate3(!state3);
    setstate1(false);
  };
  return (
    <div className="faq">
      <HeadLine headline="FAQ" />
      <TypographyComponent
        onClickFun={showHideDiv1}
        className={state1 ? "first-p opend" : "first-p"}
      >
        What is COOLALIENS <IoIosArrowDown />
      </TypographyComponent>
      {state1 && (
        <TypographyComponent className="toggle-p">
          COOLALIENS IS A COLLECTION OF 10,000 UNIQUE DIGITAL NFT COLLECTIBLES
          CREATED USING A GENERATIVE ALGORITHM AND STORED ON THE ETHEREUM
          BLOCKCHAIN AS ERC-721 TOKENS. OWNING A COOLALIEN WILL GRANT YOU
          EXCLUSIVE ACCESS TO SPECIAL ROADMAP PERKS, SUCH AS EXCLUSIVE MERCH AND
          GIVEAWAYS ONLY FOR COOLALIENS HOLDERS.
        </TypographyComponent>
      )}
      <TypographyComponent
        onClickFun={showHideDiv2}
        className={state2 ? "first-p opend" : "first-p"}
      >
        Where can I purchase a COOLALIENS NFT?
        <IoIosArrowDown />
      </TypographyComponent>
      {state2 && (
        <TypographyComponent className="toggle-p">
          YOU WILL ONLY BE ABLE TO PARTICIPATE IN THE PRESALE ON OUR OFFICIAL
          WEBSITE COOLALIENS.FUN. AFTER THE INITIAL MINTING PROCESS, YOU WILL BE
          ABLE TO TRADE YOUR COOLALIENS ON OPENSEA.
        </TypographyComponent>
      )}
      <TypographyComponent
        className={state3 ? "first-p opend" : "first-p"}
        onClickFun={showHideDiv3}
      >
        What's the COOLALIENS furute?
        <IoIosArrowDown />
      </TypographyComponent>
      {state3 && (
        <TypographyComponent className="toggle-p">
          WHO KNOWS? ​THEIR FUTURE IS YET TO BE DETERMINED, AND THEIR FATE WILL
          BE IN YOUR HANDS.
        </TypographyComponent>
      )}
    </div>
  );
};

export default FAQ;
