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

  function handleClick({ index }) {
    // we need to change the borad arr
    // if index of board array the player has chosen is null, player can move
    // add X to the index of the array
    // Is it the players move ?

    setBoard();
  }

  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
