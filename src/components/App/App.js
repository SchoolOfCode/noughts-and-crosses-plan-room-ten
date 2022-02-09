import "./App.css";
import Board from "../Board"
import {useState} from 'react'



function App() {

  const [board, setBoard] = useState(
    [null, null, null,
    null, null, null,
    null, null, null])

  return (
    <div className="App">
    <Board board={board}/>
    </div>
  );
}

export default App;
