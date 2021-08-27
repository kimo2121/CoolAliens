import React from "react";
import "./Mint.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import HeadLine from "../HeadLine/HeadLine";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(2),
      },
      "& .MuiBadge-root": {
        marginRight: theme.spacing(4),
      },
    },
    buttonStyle: {
      boxShadow: "0 1px 2px 2px #0ac2b9",
      background: "#26016f ",
      color: "white",
      fontWeight: "bolder",
      width: "25px",
      height: "25px",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#705bb6",
      },
      "&:disabled": {
        color: "#00FF3A",
      },
    },
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
  const [count, setCount] = React.useState(1);

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
            <div className={classes.root}>
              <div>
                <ButtonGroup
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "3vw",
                  }}
                >
                  <Button
                    className={classes.buttonStyle}
                    aria-label="reduce"
                    onClick={() => {
                      setCount(Math.max(count - 1, 0));
                    }}
                    disabled={count === 0}
                  >
                    <RemoveIcon
                      style={{ fontWeight: "bolder", fontSize: "1.6vmax" }}
                    />
                  </Button>
                  <Button
                    disabled
                    style={{
                      boxShadow: "0 1px 2px 2px #0ac2b9",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 10px",
                      background: "#26016f",
                      color: "white",
                      fontSize: "1.3vmax",
                      fontWeight: "bolder",
                      borderRadius: "8px",
                    }}
                  >
                    {count}
                  </Button>
                  <Button
                    className={classes.buttonStyle}
                    aria-label="increase"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    disabled={count === 5}
                  >
                    <AddIcon
                      style={{ fontWeight: "bold", fontSize: "1.5vmax" }}
                    />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
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
