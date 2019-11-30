import React from "react";

function Table(props) {
  return (
    <table style={styles.table}>
      <tbody>{props.tableData}</tbody>
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
