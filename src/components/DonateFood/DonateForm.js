import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link, navigate } from "@reach/router";
import ThankYou from "./ThankYou";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "85%",
    left: "10%",
    top: "20%",
    right: "10%",
    padding: 1,
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.7,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "green",
  },
}));

export default function DonateForm() {
  const classes = useStyles();

  //const [modalStyle] = React.useState(getModalStyle);
  const [DonateForm, setDonateForm] = React.useState(false);

  const DonateFormOpen = () => {
    setDonateForm(true);
  };

  const handleCloseDonateForm = () => {
    setDonateForm(false);
  };

  return (
    <div className={classes.root}>
      {/* <img src="https://img.icons8.com/fluent-systems-filled/48/000000/meal.png" /> */}
      <h1>Donate Food!</h1>
      <div>
        <TextField
          id="form"
          label="Resturant Name"
          style={{ margin: 8 }}
          placeholder="Resturant Name"
          helperText="*required"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="form"
          label="First Name"
          id="margin-none"
          defaultValue=""
          className={classes.textField}
          helperText=""
          variant="filled"
        />
        <TextField
          id="form"
          label="Last Name"
          id="margin-dense"
          defaultValue=""
          className={classes.textField}
          helperText=""
          margin="dense"
          variant="filled"
        />
        <TextField
          id="form"
          label="Phone"
          id="margin-normal"
          defaultValue=""
          className={classes.textField}
          helperText="*required"
          margin="normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="form"
          label="Type of Food"
          style={{ margin: 8 }}
          placeholder="Food Type"
          helperText="*required"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          label="Food Amount"
          id="form"
          //defaultValue="Quantity of Food"
          className={classes.textField}
          helperText="*required"
          variant="filled"
        />
        <TextField
          label="Expiration Date"
          id="form"
          placeholder="mm/dd/yyy"
          //defaultValue="Is the food perishable?"
          className={classes.textField}
          helperText="*required"
          margin="normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="form"
          label="Address"
          style={{ margin: 8 }}
          placeholder="Street, City, State, Zip"
          helperText="*required"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          //variant="outlined"
        />
        {/* <Button
          // onClick={() => {
          //   alert("Thank you!");
          // }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          submit
        </Button> */}
        <Link to="../thankyou">
          {" "}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            submit
          </Button>
        </Link>
      </div>
    </div>
  );
}
