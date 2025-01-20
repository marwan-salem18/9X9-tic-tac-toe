import { useState } from 'react'
import './App.css'
import Board from './components/Board'

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

    if (calculateBoardWinner(squares[col]) || (!(squares[col]).includes(null))) {
      console.log((!squares.includes(null)))
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
      <div className="game-row">
        <Board isOn={0 === board ||board === true && !winner[0] && squares[0].includes(null)} squares={squares[0]} handleClick={(col) => handleClick(0,col)} />
        <Board isOn={1 === board ||board === true && !winner[1] && squares[1].includes(null)} squares={squares[1]} handleClick={(col) => handleClick(1,col)} />
        <Board isOn={2 === board ||board === true && !winner[2] && squares[2].includes(null)} squares={squares[2]} handleClick={(col) => handleClick(2,col)} />
      </div>,
      <div className="game-row">
        <Board isOn={3 === board ||board === true && !winner[3] && squares[3].includes(null)} squares={squares[3]}   handleClick={(col) => handleClick(3,col)} />
        <Board isOn={4 === board ||board === true && !winner[4] && squares[4].includes(null)} squares={squares[4]}   handleClick={(col) => handleClick(4,col)} />
        <Board isOn={5 === board ||board === true && !winner[5] && squares[5].includes(null)} squares={squares[5]}   handleClick={(col) => handleClick(5,col)} />
      </div>,
      <div className="game-row">
        <Board isOn={6 === board ||board === true && !winner[6] && squares[6].includes(null)} squares={squares[6]}   handleClick={(col) => handleClick(6,col)} />
        <Board isOn={7 === board ||board === true && !winner[7] && squares[7].includes(null)} squares={squares[7]}   handleClick={(col) => handleClick(7,col)} />
        <Board isOn={8 === board ||board === true && !winner[8] && squares[8].includes(null)} squares={squares[8]}   handleClick={(col) => handleClick(8,col)} />
      </div>
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
