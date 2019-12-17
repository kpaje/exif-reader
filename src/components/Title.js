import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default function Title(props) {
  const classes = useStyles();

  return (
    // <Typography component="h2" variant="h6" color="primary" gutterBottom>
    //   {props.children}
    // </Typography>

    <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap
      className={classes.title}
    >
      Dashboard
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  }
}));
