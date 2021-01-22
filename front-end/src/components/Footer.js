import React from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  p: {
    marginLeft: "40px",
  },
  footerDiv: {
    position: "relative",
    bottom: "0",
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerDiv}>
      <Divider />
      <p className={classes.p}>Made by Team High-Five.</p>
    </div>
  );
}

export default Footer;
