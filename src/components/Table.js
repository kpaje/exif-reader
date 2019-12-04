import React from "react";

function Table({ tableData }) {
	function formatTable(tableData) {
		let result = Object.entries(tableData).map(([key, value]) => (
			<tr key={key}>
				<td style={styles.table}>{key}</td>
				<td style={styles.table}>{value.toString()}</td>
			</tr>
		));
		return result;
	}

	return (
		<table style={styles.table}>
			{!undefined || !null ? <tbody>{formatTable(tableData)}</tbody> : null}
		</table>
	);
}

export default Table;

const styles = {
	table: {
		textAlign: "left",
		border: "1px solid",
		borderCollapse: "collapse"
	}
};
