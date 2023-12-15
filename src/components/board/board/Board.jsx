import { pawnMoves } from "../../../scripts/pieceMoves";
import Column from "../../column/Column";
import './Board.css'
import { useState } from "react";

const Board = () => {
    const columns = [0,1,2,3,4,5,6,7]
    const [pieceLocations, setPieceLocations] = useState({
        7:[{occupied: true, color:'black', piece: 'r'},{occupied: true, color:'black', piece: 'n'},{occupied: true, color:'black', piece: 'b'},{occupied: true, color:'black', piece: 'q'},{occupied: true, color:'black', piece: 'k'},{occupied: true, color:'black', piece: 'b'},{occupied: true, color:'black', piece: 'n'},{occupied: true, color:'black', piece: 'r'}],
        6:[{occupied: true, color:'black', piece: 'p'},{occupied: true, color:'black', piece: 'p'},{occupied: true, color:'black', piece: 'p'},{occupied: true, color:'black', piece: 'p'},{occupied: true, color:'black', piece: 'p'},{occupied: true, color:'black', piece: 'p'},{occupied: true, color:'black', piece: 'p'},{occupied: true, color:'black', piece: 'p'}],
        5:[{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''}],
        4:[{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''}],
        3:[{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''}],
        2:[{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''},{occupied: false, color:'', piece: ''}],
        1:[{occupied: true, color:'white', piece:'p'},{occupied: true, color:'white', piece:'p'},{occupied: true, color:'white', piece:'p'},{occupied: true, color:'white', piece:'p'},{occupied: true, color:'white', piece:'p'},{occupied: true, color:'white', piece:'p'},{occupied: true, color:'white', piece:'p'},{occupied: true, color:'white', piece:'p'}],
        0:[{occupied: true, color:'white', piece: 'r'},{occupied: true, color:'white', piece: 'n'},{occupied: true, color:'white', piece: 'b'},{occupied: true, color:'white', piece: 'q'},{occupied: true, color:'white', piece: 'k'},{occupied: true, color:'white', piece: 'b'},{occupied: true, color:'white', piece: 'n'},{occupied: true, color:'white', piece: 'r'}],
    })

    const [activeSquare, setActiveSquare] = useState({
        column: -1,
        row: -1
    })

    const [availableMoves, setAvailableMoves] = useState([])

    const updateActiveSquare = (column, row) => {
        setActiveSquare({column, row})
    }

    const renderedColumns = columns.map((ele)=><Column key={ele} columnNumber={ele} pieceLocations={pieceLocations} updateActiveSquare={updateActiveSquare} availableMoves={availableMoves} setAvailableMoves={setAvailableMoves} activeSquare={activeSquare}/>)
    return (<>
        <div className="board">
            {renderedColumns}
        </div>
        <div>{activeSquare.row} | {activeSquare.column}</div>
        <div>{availableMoves.map((ele, i)=><div key={i}>{ele.row} | {ele.column}</div>)}</div>
        </>
    )
}

export default Board