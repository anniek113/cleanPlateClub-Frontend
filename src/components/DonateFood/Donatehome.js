import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DonateForm from "./DonateForm";

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
}));

export default function DonateHome() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div>
        <DonateForm />
      </div>
    </div>
  );
}
