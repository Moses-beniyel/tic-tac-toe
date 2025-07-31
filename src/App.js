import { useState } from "react";
import Squares from "./square/Squares";
import "./App.css";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const isXNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handleClick(i) {
    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }

    console.log(currentSquares);

    const nextSquares = currentSquares.slice();
    nextSquares[i] = isXNext ? "X" : "O";

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    console.log(nextHistory);
    console.log(currentMove);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function calculateWinner(squares) {
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
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(currentSquares);
  let status="";
  if (winner) {
    status = `Winner : ${winner}`;
  } else if (currentSquares.every((square) => square !== null)) {
    status = "Match Draw..!";
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="body">
        <div className="status">{status}</div>

        <div className="board-row">
          <Squares
            value={currentSquares[0]}
            onSquareClick={() => handleClick(0)}
          />
          <Squares
            value={currentSquares[1]}
            onSquareClick={() => handleClick(1)}
          />
          <Squares
            value={currentSquares[2]}
            onSquareClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row">
          <Squares
            value={currentSquares[3]}
            onSquareClick={() => handleClick(3)}
          />
          <Squares
            value={currentSquares[4]}
            onSquareClick={() => handleClick(4)}
          />
          <Squares
            value={currentSquares[5]}
            onSquareClick={() => handleClick(5)}
          />
        </div>
        <div className="board-row">
          <Squares
            value={currentSquares[6]}
            onSquareClick={() => handleClick(6)}
          />
          <Squares
            value={currentSquares[7]}
            onSquareClick={() => handleClick(7)}
          />
          <Squares
            value={currentSquares[8]}
            onSquareClick={() => handleClick(8)}
          />
        </div>

        <div className="move-list">
          <p>Jump to:</p>
          {history.map((_, move) => {
            const label = move === 0 ? "Game Start" : `Move #${move}`;
            return (
              <button key={move} onClick={() => setCurrentMove(move)}>
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
