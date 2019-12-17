import React from "react";
import Exif from "../components/Exif";
import Fingerprint from "../components/Fingerprint";
import Dashboard from "../components/Dashboard";
<<<<<<< HEAD
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
=======

function HomePage() {
	return (
		<div>
			{/* <Exif /> */}
			<Dashboard />
			{/* <Fingerprint /> */}
		</div>
	);
>>>>>>> parent of 0de0249... linked to pages. in progress separating Dashboard into smaller components and figuring out container
}

export default HomePage;
