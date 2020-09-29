import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";

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
    padding: 2,
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
  header: {
    fontSize: "3.5vh",
  },
}));

export default function ClaimForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.header}>Get in Contact With the Restaurant</div>
      <br />
      {/* <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div> */}
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Name"
          placeholder="First, Last"
          multiline
          style={{ margin: 8 }}
          //margin="normal"
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Phone Number"
          style={{ margin: 8 }}
          placeholder="include area code"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Pick Up Notes"
          placeholder="include pick up times"
          multiline
          style={{ margin: 8 }}
          rows={6}
          defaultValue=""
          variant="filled"
        />
      </div>
      <Link to="../">
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
    </form>
  );
}
