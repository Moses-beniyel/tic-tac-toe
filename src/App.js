import { useState } from "react";
import Squares from "./square/Squares";

function App() {
  const [isXNext,setisXNext]=useState(true);
  const [square, setSquare] = useState(Array(9).fill(null))
  
  function handleClick(i) {
    if (calculateWinner(square) || square[i]) {
      return;
    }
    const nextSquare=square;
    nextSquare[i]=isXNext ? "X" : "O";
    setSquare(nextSquare);
    setisXNext(!isXNext);
    //console.log(square[i]);
    
  }
  
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isXNext ? 'X' : 'O');
  }
  return (
    <>
      <div className="body">
        <div className="status" >{status}</div>
        <div className="board-row">
          <Squares className="square" value={square[0]} onSquareClick={() => handleClick(0)}></Squares>
          <Squares className="square" value={square[1]} onSquareClick={() => handleClick(1)}></Squares>
          <Squares className="square" value={square[2]} onSquareClick={() => handleClick(2)}></Squares>
        </div>
        <div className="board-row">
          <Squares className="square" value={square[3]} onSquareClick={()=>handleClick(3)}></Squares>
          <Squares className="square" value={square[4]} onSquareClick={()=>handleClick(4)}></Squares>
          <Squares className="square" value={square[5]} onSquareClick={()=>handleClick(5)}></Squares>
        </div>
        <div className="board-row">
          <Squares className="square" value={square[6]} onSquareClick={()=>handleClick(6)}></Squares>
          <Squares className="square" value={square[7]} onSquareClick={()=>handleClick(7)}></Squares>
          <Squares className="square" value={square[8]} onSquareClick={()=>handleClick(8)}></Squares>
        </div>
        <div>
          <p>states</p>
        </div>
      </div>
    </>
  );
  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

}
export default App