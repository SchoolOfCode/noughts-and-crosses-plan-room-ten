import "./App.css";
import Board from "../Board";
import { useState } from "react";
import { calculateWinner } from "../../helper";

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
  const winner = calculateWinner(board);

  function refreshPage() {
    window.location.reload(false);
  }

  function handleClick(i) {
    // console.log(i);
    // take in an index from the player click
    // we need to change the board arr
    // if index of board array the player has chosen is null, player can move
    // if player move add X to the index of the array
    // change move state
    if (winner || board[i]) {
      return;
    }
    setBoard((previousState) => {
      return [
        ...previousState.slice(0, i),
        playerMove ? "x" : "o",
        ...previousState.slice(i + 1),
      ];
    });
    setPlayerMove(!playerMove);
    console.log(playerMove);
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleClick} />
      <div>
        <h2>{winner ? "Winner: " + winner : "Pick your move"}</h2>

        <button onClick={refreshPage}>Click to play again!</button>
      </div>
    </div>
  );
}

export default App;
