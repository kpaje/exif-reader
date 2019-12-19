import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ExifPage from "./pages/ExifPage";
import Papers from "./components/Papers";
import Copyright from "./components/Copyright";
import { makeStyles } from "@material-ui/core/styles";

function App() {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.root}>
				<Dashboard />
				<Switch>
					<Route exact path="/" component={Papers} />
					<Route path="/exif" component={ExifPage} />
				</Switch>
			</div>
			<Copyright />
		</div>
	);
}

export default App;

const useStyles = makeStyles({
	root: {
		display: "flex"
	}
});
