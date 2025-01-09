import { useState } from 'react'
import './App.css'
import Board from './componts/Board'

function App() {
  const [nextPlayer, setNextPlayer] = useState(true)
  const [squares, setSquares] = useState(Array.from({ length: 9 }, () => Array(9).fill(null)));
  const [board, setBoard] = useState(4)

  function handleClick(row,col) {
    if (board != row || calculateBoardWinner(squares[row])  || squares[row][col]) {
      return
    }
    const newSquares = squares.slice()
    if (nextPlayer) {
      newSquares[row][col] = "X";  
    }
    else{
      newSquares[row][col] = "O";   
    }
    setSquares(newSquares);
    setNextPlayer(!nextPlayer);
    setBoard(col);
  }
  let status
  status = "Next player: " + (nextPlayer ? "X" : "O");
  let nextBoard = `Next Board: ${board + 1}`
  return (  
    <>
      <div>{status}</div>
      <div>{nextBoard}</div>
      {squares.map((row, rowIndex) => {
        if (rowIndex % 3 === 0) {
          return (
            <div className="game-row" key={`row-${rowIndex}`}>
              {squares.slice(rowIndex, rowIndex + 3).map((subRow, index) => (
                <Board
                  key={`board-${rowIndex + index}`} 
                  squares={subRow} 
                  handleClick={(col) => handleClick(rowIndex + index, col)} 
                />
              ))}
            </div>
          );
        }
        return null; // Skip rows that are not the start of a new group
      })}
    </>
  )
}
function calculategameWinner(params) {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function calculateBoardWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default App