import React from "react";
import { startCase } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";

// const FingerprintTable = () => {
const FingerprintTable = ({ title, data }) => {
	const classes = useStyles();

	return (
		<section>
			{Object.entries(data).map(([key, value], idx) => (
				<>
					<List className={classes.root}>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<ImageIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={startCase(key)} secondary={value} />
						</ListItem>
					</List>
					<Divider variant="inset" component="li" />
				</>
			))}

			{/* <table>
			<thead>
				<tr>
					<td>{title}</td>
				</tr>
			</thead>
			<tbody>
				{Object.entries(data).map(([key, value], idx) => (
					<tr key={idx}>
						<td>{startCase(key)}</td>
						<td>{value}</td>
					</tr>
				))}
			</tbody>
		</table> */}
		</section>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		height: "auto",
		// maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	}
}));
export default FingerprintTable;
