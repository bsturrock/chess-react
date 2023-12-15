import './Square.css'
import { bishopMoves, knightMoves, pawnMoves, rookMoves } from '../../../scripts/pieceMoves'

const Square = ({column, row, pieceInfo, pieceLocations, updateActiveSquare, availableMoves, setAvailableMoves, activeSquare, movePiece, clearBoardStatus}) => {
    
    let {color, piece, occupied} = pieceInfo

    const getColor = () => {
        switch(true){
            case parseInt(column)%2==0 && parseInt(row)%2==0:
                return 'dark';
            case column%2==0 && row%2!=0:
                return 'light'
            case column%2!=0 && row%2==0:
                return 'light'
            case column%2!=0 && row%2!=0:
                return 'dark'
        }
    }

    const checkIfMove = () => {
        for(let move of availableMoves){
            if(column==move.column && row==move.row){
                return true
            }
        }
        return false
    }

    const checkIfAttack = () => {
        if(checkIfMove() && color=='black'){
            return true
        }
        return false
    }

    const checkIfActive = () => {
        return activeSquare.column==column && activeSquare.row==row
    }

    const pawnHasAlreadyMoved = () => {
        if(piece=='p' && color=='white' && row==1){return false}
        return true
    }

    let hoverable = color == 'white' ? 'hoverable' : ''
    let isAMove = checkIfMove() ? (checkIfAttack() ? 'attack' : 'move') : ''
    let isActive = checkIfActive() ? 'active' : ''

    const handleClick = () => {
        if(color=='white' && !checkIfActive()){
            updateActiveSquare(pieceLocations[row][column])
            if(piece == 'p'){
                setAvailableMoves(pawnMoves(pieceLocations, {column,row}, pawnHasAlreadyMoved()))
            } else if(piece == 'n'){
                setAvailableMoves(knightMoves(pieceLocations, {column,row}))
            } else if(piece == 'b'){
                setAvailableMoves(bishopMoves(pieceLocations,{column, row}))
            } else if(piece == 'r'){
                setAvailableMoves(rookMoves(pieceLocations,{column, row}))
            } else if(piece == 'q'){
                setAvailableMoves([...bishopMoves(pieceLocations,{column, row}), ...rookMoves(pieceLocations,{column, row})])
            }
        } else if (checkIfMove()){
            movePiece(pieceLocations[row][column])
        } else if(checkIfActive()){
            clearBoardStatus()
        }
    }
    
    return (
        <>
        <div onClick={handleClick} id={`${column}-${row}`} className={`square-container ${isAMove} ${isActive} ${hoverable} ${color} ${piece} ${getColor()}`}>
        </div>
        </>
    )
}

export default Square