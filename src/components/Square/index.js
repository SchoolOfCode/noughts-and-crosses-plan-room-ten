import React from "react";

const style = {
  background: "lightpink",
  border: "4px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

function Square({ value, onClick, id }) {
  return (
    <button style={style} onClick={() => onClick(id)}>
      {value}
    </button>
  );
}

export default Square;
