import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import bkg002 from "../../../assets/Images/bkg002.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  fullWidthImageContainer: {
    position: "relative",
    marginTop: "50px",
  },
  fullWidthImage: {
    width: "100%",
    height: "auto",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

const FullWidthImage2 = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.fullWidthImageContainer}>
        <img
          src={bkg002}
          alt="Full width scenic view of mountains and forest"
          className={classes.fullWidthImage}
        />
      </Paper>
    </Grid>
  );
};

export default FullWidthImage2;
