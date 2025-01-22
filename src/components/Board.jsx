import Square from "./square";

function Board({squares,handleClick,isOn,isWon}) {
    if (!isWon) {
    return(
        <div className={`grid grid-rows-3 mt-1 ml-1 size-52 ${isOn ?'border-blue-500 border-4 animate-pulse' : 'bg-white border-2'}`} >
            <div className="flex">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="flex">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="flex">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    );}
    else {
        return(
            <div className={`mt-1 ml-1 size-52 border-black border-2 flex `}> 
            <p className="size-full  text-9xl self-center mt-12">{isWon}</p>
            </div>
        )
    }
}

export default Board