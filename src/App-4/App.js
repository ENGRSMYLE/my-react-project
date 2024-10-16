import { useState } from "react";
import "./App.css";

export default function App() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xisNext, setXisnext] = useState(true);

  const winner = calculateWinner(squares);
  let stat;
  if (winner) {
    stat = `Winner:  ${winner}`
  } else {
    stat = `Next player is ${ xisNext ? 'X': 'O'}` 
  }


  function handleClick(i) {
    const nextSquares = squares.slice();
    // if (nextSquares[i]) return;
    if (squares[i] || calculateWinner(squares)) return;
    xisNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquare(nextSquares);
    setXisnext(!xisNext);
    
  }
  return ( 
    <>
      <div className="stat"> { stat } </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareclick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareclick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareclick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareclick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareclick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareclick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareclick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareclick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareclick={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({ value, onSquareclick }) {
  // const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={onSquareclick}>
      {value}
    </button>
  );
}

// Function that calculates winner 
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
