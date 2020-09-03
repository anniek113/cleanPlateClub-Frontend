import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    home: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'grey',
        height: 1000,
        padding: '0 30px',
    },
}));

export default function Home() {
    const classes = useStyles();
    return <div className={classes.home}></div>;
}