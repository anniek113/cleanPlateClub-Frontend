import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SignUp from "./SignUp";
import Modal from "@material-ui/core/Modal";
import LogIn from "./LogIn";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "2.75vh",
  },
  avatar: {
    variant: "square",
  },
  appbar: {
    backgroundColor: "black",
    opacity: 0.5,
  },
  food: {
    alignContent: "center",
    marginLeft: theme.spacing(2),
    backgroundColor: "none",
    opacity: 0.001,
  },
  Button: {
    marginRight: theme.spacing(2),
    backgroundColor: "none",
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function NavBar() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [signin, setSignInOpen] = React.useState(false);
  const [login, setLogInOpen] = React.useState(false);

  const signUpOpen = () => {
    setSignInOpen(true);
  };

  const logInOpen = () => {
    setLogInOpen(true);
  };

  const handleCloseSignUp = () => {
    setSignInOpen(false);
  };
  const handleCloseLogin = () => {
    setLogInOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <Avatar className={classes.avatar}>
            <Link className={classes.title} to="/">
              <img
                src="https://img.icons8.com/ios/100/000000/meal.png"
                height="40"
              />
            </Link>
          </Avatar>
          <Typography variant="h6" className={classes.title}>
            Charleston Clean Plate Club
          </Typography>
          {/* <Button class="food" color="inherit">
            <Link to="donate-food">DONATE</Link>
          </Button>
          <Button class="food" color="inherit">
            <Link to="claim-food">CLAIM</Link>
          </Button>{" "} */}
          <Button color="inherit" onClick={signUpOpen}></Button>
          <Button color="inherit" onClick={signUpOpen}>
            Sign Up
          </Button>
          <Modal
            open={signin}
            onClose={handleCloseSignUp}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <SignUp
              handleCloseSignUp={handleCloseSignUp}
              logInOpen={logInOpen}
            />
          </Modal>
          <Button color="inherit" onClick={logInOpen}>
            Log In
          </Button>
          <Modal
            open={login}
            onClose={handleCloseLogin}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <LogIn />
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}
