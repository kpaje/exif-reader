import React from "react";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Dropzone from "./Dropzone";
import Fingerprint from "./Fingerprint";
import { makeStyles } from "@material-ui/core/styles";

const Papers = () => {
	const classes = useStyles();

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	const fingerprintHeight = clsx(classes.paper, classes.fingerprintHeight);

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8} lg={9}>
						<Paper className={fixedHeightPaper}>
							{/* <Paper className={fixedWidthPaper}> */}
						</Paper>
					</Grid>
					<Grid item xs={12} md={4} lg={3}>
						<Paper className={fixedHeightPaper}>
							<Dropzone />
						</Paper>
					</Grid>
					<Grid item xs={12}>
						{/* <Paper className={classes.paper}> */}
						<Paper className={fingerprintHeight}>
							<Fingerprint />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
};

export default Papers;

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
