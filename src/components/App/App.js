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
    console.log(i);
    // take in an index from the player click
    // we need to change the board arr
    // if index of board array the player has chosen is null, player can move
    // if player move add X to the index of the array
    // change move state

    setBoard((previousState) => {
      return [...previousState, (previousState[i] = "X")];
    });
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleClick} />
    </div>
  );
}

export default App;
