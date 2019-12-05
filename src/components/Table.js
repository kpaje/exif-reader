import React from "react";

function Table({ tableData }) {
	return (
		<table style={styles.table}>
			{!undefined || !null ? (
				<tbody>
					{Object.entries(tableData).map(([key, value]) => (
						<tr key={key}>
							<td style={styles.table}>{key}</td>
							<td style={styles.table}>{value.toString()}</td>
						</tr>
					))}
				</tbody>
			) : null}
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
