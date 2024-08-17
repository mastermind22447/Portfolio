import React from "react";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "-50%",
    height: "146vh",
  },
}));

const PageDown = () => {
  const classes = useStyles();
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.center}>
      <Button variant="contained" onClick={handleScroll}>
        <ExpandMoreIcon />
      </Button>
    </div>
  );
};

export default PageDown;
