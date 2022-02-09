import React from "react";

function Square({ value, onClick, id }) {
  return (
    <div onClick={() => onClick(id)}>
      <p>{value}</p>
    </div>
  );
}

export default Square;
