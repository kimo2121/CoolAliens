import React from "react";
import "./Mint.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import HeadLine from "../HeadLine/HeadLine";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootButton: {
      background: "#26016f ",
      borderRadius: 8,
      border: 0,
      color: "white",
      fontWeight: "bolder",
      fontSize: "1.6vmax",
      height: 50,
      padding: "0 30px",
      boxShadow: "0 1px 2px 2px #0ac2b9",
      "&:hover": {
        backgroundColor: "#705bb6",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })
);

const Mint: React.FC = () => {
  const classes = useStyles();

  return (
    <div style={{ margin: "30vh 0" }}>
      <HeadLine headline="Mint" />
      <div className="mint-component">
        <div className="counter-button-container">
          <h1>Mint your Non-Fungible CoolAliens</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2vh",
            }}
          >
            <Button
              classes={{
                root: classes.rootButton,
                label: classes.label,
              }}
            >
              Mint
            </Button>
          </div>
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              boxShadow: "0px 0px 10px 5px #71639ea8",
              borderRadius: "5px",
              margin: "5vh 0",
            }}
          >
            <span style={{ marginRight: "5vw" }}>Minted 0 / 500</span>
            <span>0.14 ETH each</span>
          </div>
        </div>
        {/* <div className="counter-div quantity-address">
          <span>Contract address : </span>
        </div> */}
      </div>
    </div>
  );
};

export default Mint;
