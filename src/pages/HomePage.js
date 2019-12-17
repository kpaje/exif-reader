import React from "react";
import Exif from "../components/Exif";
import Fingerprint from "../components/Fingerprint";
import Dashboard from "../components/Dashboard";
import Papers from "../components/Papers";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function HomePage() {
  const classes = useStyles();

  return (
    // <div>
    //   {/* <Exif /> */}
    //   {/* <Dashboard /> */}
    //   {/* <Fingerprint /> */}
    <div className={classes.root}>
      <CssBaseline />
      {/* <main className={classes.content}> */}
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Papers />
      </Container>
      {/* </main> */}
    </div>
  );
}

export default HomePage;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  fingerprintHeight: {
    height: 480
  }
}));
