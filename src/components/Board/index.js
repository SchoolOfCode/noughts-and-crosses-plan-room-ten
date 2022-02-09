import Square from "../Square";

function Board({ board, onClick }) {
  const style = {
    border: "4px solid violet",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "75px auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  };

  return (
    <div style={style}>
      {board.map((square, index) => {
        return (
          <Square id={index} key={index} value={square} onClick={onClick} />
        );
      })}
    </div>
  );
}

export default Board;
