import "./App.css";
import Board from "../Board";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [playerMove, setPlayerMove] = useState(true);

  function handleClick(i) {
    // we need to change the borad arr
    // if index of board array the player has chosen is null, player can move
    // Is it the players move ?
    // add X to the index of the array

    setBoard();
  }

  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
