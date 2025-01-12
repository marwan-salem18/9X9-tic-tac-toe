import { useState } from 'react'
import './App.css'
import Board from './componts/Board'

function App() {
  const [nextPlayer, setNextPlayer] = useState(true)
  const [squares, setSquares] = useState(Array.from({ length: 9 }, () => Array(9).fill(null)));
  const [board, setBoard] = useState(4)
  const [winner, setWinner] = useState(Array(9).fill(null))
  let status
  function handleClick(row,col) {
    if ((board != row  && board != true)|| squares[row][col] || winner[row] || calculateBoardWinner(winner)) {
      return
    }

    const newSquares = squares.slice()
      newSquares[row][col] = nextPlayer? "X" : "O";  

    setSquares(newSquares);
    setNextPlayer(!nextPlayer);

    if (calculateBoardWinner(squares[row])) {
      let nextWin = winner.slice();
      nextWin[row] = nextPlayer? "X" : "O";
      setWinner(nextWin)
      if (calculateBoardWinner(nextWin)){
        setBoard(false)
        return;
      }
    }

    if (calculateBoardWinner(squares[col])) {
      setBoard(true)
    }
    else {
      setBoard(col);
    }
  }

  
  if (board === false) {
    status = "winner is :" + (nextPlayer? "O": "X");
  }
  else{
    status = "Next player: " + (nextPlayer ? "X" : "O");
  }
  return (  
    <>
      <div>{status}</div>
      {squares.map((row, rowIndex) => {
        if (rowIndex % 3 === 0) {
          return (
            <div className="game-row" key={`row-${rowIndex}`}>
              {squares.slice(rowIndex, rowIndex + 3).map((subRow, index) => (
                <Board
                  key={`board-${rowIndex + index}`} 
                  isOn={index + rowIndex === board || board === true && !winner[index + rowIndex]}
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
