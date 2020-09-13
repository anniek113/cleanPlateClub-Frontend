import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    position: "absolute",
    left: "15%",
    top: "20%",
    padding: 1,
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "none",
    opacity: 0.7,
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "75%",
    flexShrink: 0,
    padding: 2,
    alignContent: "stretch",

    button: {
      width: "100%",
    },
  },
  // secondaryHeading: {
  //     fontSize: theme.typography.pxToRem(15),
  //     color: theme.palette.text.secondary,
  //     alignContent: 'stretch',
  //     backgroundColor: 'white',

  // },%
}));

export default function HomeText() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Do you want to donate food?
          </Typography>

          {/* <Typography className={classes.secondaryHeading}>visit our Donate Food page</Typography> */}
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            If you have left over food and do not want it to go to waste,{" "}
            <Link to="donate-food">visit our Donate Food page </Link>to learn
            how we can connect you to an organization in need!
          </Typography>
          {/* <button class="butto">
            <Link to="donate-food">Click here to donate food!</Link>
          </button> */}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Do you have a need for excess food?
          </Typography>

          {/* <Typography className={classes.secondaryHeading}></Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you are an organization helping feed the hungry we can help.
            <Link to="claim-food"> Visit our claim food page</Link>to see what
            resturants in your area have left over food and claim it today!
          </Typography>{" "}
          {/* <button class="butto">
            <Link to="claim-food">Click here to claim food!</Link>
          </button> */}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Contact Us</Typography>
          {/* <Typography className={classes.secondaryHeading}>
                        Filtering has been entirely disabled for whole web server</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Phone: 843-123-4567 <br></br>Email: CCPC@gmail.com
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Charleston Clean Plate Club was started in 2020 to help eliminate
            food waste from resturants and connect it to local charities in the
            Charleston area.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
