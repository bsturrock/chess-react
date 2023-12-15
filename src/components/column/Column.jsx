import Square from "../board/square/Square";
import './Column.css'

const Column = ({columnNumber, pieceLocations, updateActiveSquare, availableMoves, setAvailableMoves, activeSquare, movePiece, clearBoardStatus}) => {
    const squares = [7,6,5,4,3,2,1,0]
    const renderedSquares = squares.map((ele)=><Square key={ele} column={columnNumber} row={ele} pieceInfo={pieceLocations[ele][columnNumber]} pieceLocations={pieceLocations} updateActiveSquare={updateActiveSquare} availableMoves={availableMoves} setAvailableMoves={setAvailableMoves} activeSquare={activeSquare} movePiece={movePiece} clearBoardStatus={clearBoardStatus}/>)
    return (
        <div className="column">
            {renderedSquares}
        </div>
    )
}

export default Column