import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Container } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { Link } from "@reach/router";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "dark brown",
    padding: theme.spacing(4, 0),
    opacity: 0.75,
  },
  link: {
    marginRight: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.white,
  },

  // facebook: {
  //   color: "#1877f2",
  // },
  // twitter: {
  //   color: "#1da1f2",
  // },
  // instagram: {
  //   color: "#803ab9",
  // },
  // icons: {
  //   fontSize: 50,
  // },
}));

export default function TheFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container>
          <Grid item xs={12} sm={3}>
            {/* <Link
              href="https://facebook.com"
              target="_blank"
              className={classes.facebook}
            >
              <FacebookIcon className={classes.icons} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className={classes.twitter}
            >
              <TwitterIcon className={classes.icons} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className={classes.instagram}
            >
              <InstagramIcon className={classes.icons} />


            </Link> */}
            <Link class="link" to="donate-food">
              DONATE
            </Link>

            {/* <Link class="link" to="donate-food">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Donate
              </Button>
            </Link>
            <br></br>
            <Link class="link" to="claim-food">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                padding="2"
                color="primary"
                className={classes.submit}
              >
                Claim
              </Button>
            </Link> */}
            <br></br>
            <Link class="link" to="claim-food">
              CLAIM
            </Link>
          </Grid>
          <Grid item xs={12} sm={9}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
