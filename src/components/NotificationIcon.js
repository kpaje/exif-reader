import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

function NotificationIcon() {
	return (
		<React.Fragment>
			<IconButton color="inherit">
				<Badge badgeContent={4} color="secondary">
					<NotificationsIcon />
				</Badge>
			</IconButton>
		</React.Fragment>
	);
}

export default NotificationIcon;

const styles = {
	table: {
		textAlign: "left",
		border: "1px solid",
		borderCollapse: "collapse"
	}
};
