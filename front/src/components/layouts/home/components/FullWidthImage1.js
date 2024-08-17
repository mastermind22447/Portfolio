import React from "react";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bkg001 from "../../../assets/Images/bkg001.png";

const useStyles = makeStyles({
  fullWidthImageContainer: {
    position: "relative",
    marginTop: "50px",
  },
  fullWidthImage: {
    width: "100%",
    height: "auto",
    position: "absolute",
    top: 110,
    left: 0,
  },
});

const FullWidthImage1 = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.fullWidthImageContainer}>
        <img
          src={bkg001}
          alt="Full width scenic view of mountains and forest"
          className={classes.fullWidthImage}
        />
      </Paper>
    </Grid>
  );
};

export default FullWidthImage1;
