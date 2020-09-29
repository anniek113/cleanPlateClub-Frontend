import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeText from "../HomeText";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    position: "absolute",
    left: "20%",
    top: "30%",
    padding: 1,
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "none",
    opacity: 0.85,
    fontWeight: "bold",
    fontSize: "15vh",
  },
  home: {
    backgroundImage:
      "url(https://img.freepik.com/free-photo/wooden-planks-with-blurred-restaurant-background_1253-56.jpg?size=626&ext=jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
}));

export default function ThankYou() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <div className={classes.root}>Thank you for donating!</div>
    </div>
  );
}
