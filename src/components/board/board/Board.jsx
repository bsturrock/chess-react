import { pawnMoves } from "../../../scripts/pieceMoves";
import Column from "../../column/Column";
import './Board.css'
import { useState } from "react";

const Board = () => {
    const columns = [0,1,2,3,4,5,6,7]
    const [attemptingToMovePiece, setAttemptingToMovePiece] = useState(false)
    const [pieceLocations, setPieceLocations] = useState({
        7:[
            {occupied: true, color:'black', piece: 'r', column: 0, row: 7},
            {occupied: true, color:'black', piece: 'n', column: 1, row: 7},
            {occupied: true, color:'black', piece: 'b', column: 2, row: 7},
            {occupied: true, color:'black', piece: 'q', column: 3, row: 7},
            {occupied: true, color:'black', piece: 'k', column: 4, row: 7},
            {occupied: true, color:'black', piece: 'b', column: 5, row: 7},
            {occupied: true, color:'black', piece: 'n', column: 6, row: 7},
            {occupied: true, color:'black', piece: 'r', column: 7, row: 7}
        ],
        6:[
            {occupied: true, color:'black', piece: 'p', column: 0, row: 6},
            {occupied: true, color:'black', piece: 'p', column: 1, row: 6},
            {occupied: true, color:'black', piece: 'p', column: 2, row: 6},
            {occupied: true, color:'black', piece: 'p', column: 3, row: 6},
            {occupied: true, color:'black', piece: 'p', column: 4, row: 6},
            {occupied: true, color:'black', piece: 'p', column: 5, row: 6},
            {occupied: true, color:'black', piece: 'p', column: 6, row: 6},
            {occupied: true, color:'black', piece: 'p', column: 7, row: 6}
        ],
        5:[
            {occupied: false, color:'', piece: '', column: 0, row: 5},
            {occupied: false, color:'', piece: '', column: 1, row: 5},
            {occupied: false, color:'', piece: '', column: 2, row: 5},
            {occupied: false, color:'', piece: '', column: 3, row: 5},
            {occupied: false, color:'', piece: '', column: 4, row: 5},
            {occupied: false, color:'', piece: '', column: 5, row: 5},
            {occupied: false, color:'', piece: '', column: 6, row: 5},
            {occupied: false, color:'', piece: '', column: 7, row: 5}
        ],
        4:[
            {occupied: false, color:'', piece: '', column: 0, row: 4},
            {occupied: false, color:'', piece: '', column: 1, row: 4},
            {occupied: false, color:'', piece: '', column: 2, row: 4},
            {occupied: false, color:'', piece: '', column: 3, row: 4},
            {occupied: false, color:'', piece: '', column: 4, row: 4},
            {occupied: false, color:'', piece: '', column: 5, row: 4},
            {occupied: false, color:'', piece: '', column: 6, row: 4},
            {occupied: false, color:'', piece: '', column: 7, row: 4}
        ],
        3:[
            {occupied: false, color:'', piece: '', column: 0, row: 3},
            {occupied: false, color:'', piece: '', column: 1, row: 3},
            {occupied: false, color:'', piece: '', column: 2, row: 3},
            {occupied: false, color:'', piece: '', column: 3, row: 3},
            {occupied: false, color:'', piece: '', column: 4, row: 3},
            {occupied: false, color:'', piece: '', column: 5, row: 3},
            {occupied: false, color:'', piece: '', column: 6, row: 3},
            {occupied: false, color:'', piece: '', column: 7, row: 3}
        ],
        2:[
            {occupied: false, color:'', piece: '', column: 0, row: 2},
            {occupied: false, color:'', piece: '', column: 1, row: 2},
            {occupied: false, color:'', piece: '', column: 2, row: 2},
            {occupied: false, color:'', piece: '', column: 3, row: 2},
            {occupied: false, color:'', piece: '', column: 4, row: 2},
            {occupied: false, color:'', piece: '', column: 5, row: 2},
            {occupied: false, color:'', piece: '', column: 6, row: 2},
            {occupied: false, color:'', piece: '', column: 7, row: 2}
        ],
        1:[
            {occupied: true, color:'white', piece:'p', column: 0, row: 1},
            {occupied: true, color:'white', piece:'p', column: 1, row: 1},
            {occupied: true, color:'white', piece:'p', column: 2, row: 1},
            {occupied: true, color:'white', piece:'p', column: 3, row: 1},
            {occupied: true, color:'white', piece:'p', column: 4, row: 1},
            {occupied: true, color:'white', piece:'p', column: 5, row: 1},
            {occupied: true, color:'white', piece:'p', column: 6, row: 1},
            {occupied: true, color:'white', piece:'p', column: 7, row: 1}
        ],
        0:[
            {occupied: true, color:'white', piece: 'r', column: 0, row: 0},
            {occupied: true, color:'white', piece: 'n', column: 1, row: 0},
            {occupied: true, color:'white', piece: 'b', column: 2, row: 0},
            {occupied: true, color:'white', piece: 'q', column: 3, row: 0},
            {occupied: true, color:'white', piece: 'k', column: 4, row: 0},
            {occupied: true, color:'white', piece: 'b', column: 5, row: 0},
            {occupied: true, color:'white', piece: 'n', column: 6, row: 0},
            {occupied: true, color:'white', piece: 'r', column: 7, row: 0}
        ],
    })

    const [activeSquare, setActiveSquare] = useState({
        column: -1,
        row: -1,
        occupied: false,
        color: '',
        piece: ''
    })

    const [availableMoves, setAvailableMoves] = useState([])

    const updateActiveSquare = (square) => {
        setActiveSquare(square)
        setAttemptingToMovePiece(true)
    }

    const clearBoardStatus = () => {
        setActiveSquare({
            column: -1,
            row: -1,
            occupied: false,
            color: '',
            piece: ''
        })
        setAvailableMoves([])
        setAttemptingToMovePiece(false)
    }

    const movePiece = (newSquare) => {
        console.log(newSquare)
        console.log(activeSquare)
        const pieceLocationsCopy = {...pieceLocations}
        pieceLocationsCopy[newSquare.row][newSquare.column].piece = activeSquare.piece
        pieceLocationsCopy[newSquare.row][newSquare.column].color = activeSquare.color
        pieceLocationsCopy[newSquare.row][newSquare.column].occupied = true

        pieceLocationsCopy[activeSquare.row][activeSquare.column].piece = ''
        pieceLocationsCopy[activeSquare.row][activeSquare.column].color = ''
        pieceLocationsCopy[activeSquare.row][activeSquare.column].occupied = false

        setPieceLocations(pieceLocationsCopy)
        clearBoardStatus()
    }

    const renderedColumns = columns.map((ele)=><Column key={ele} columnNumber={ele} pieceLocations={pieceLocations} updateActiveSquare={updateActiveSquare} availableMoves={availableMoves} setAvailableMoves={setAvailableMoves} activeSquare={activeSquare} movePiece={movePiece} clearBoardStatus={clearBoardStatus}/>)
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