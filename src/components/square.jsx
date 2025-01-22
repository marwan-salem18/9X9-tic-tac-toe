
function Square({onSquareClick,value}) {
    return (
        <button className='bg-white border-2 border-solid border-black box-border w-1/3 hover:bg-slate-100 text-3xl' onClick={onSquareClick}>{value}</button>
    );
}

export default Square