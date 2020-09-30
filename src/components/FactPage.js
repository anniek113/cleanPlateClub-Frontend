import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundImage:
      "url(https://img.freepik.com/free-photo/wooden-planks-with-blurred-restaurant-background_1253-56.jpg?size=626&ext=jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  image: {
    textAlign: "center",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: "60%",
    alignItems: "center",
    backgroundColor: "none",
    opacity: 0.75,
  },
}));

export default function FactPage() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <div>
        <img
          className={classes.image}
          src="https://d2o0s5gkmp1j1.cloudfront.net/foodwaste_infographic-4.jpg?width=1200&name=foodwaste_infographic-4.jpg"
        />
      </div>
    </div>
  );
}
