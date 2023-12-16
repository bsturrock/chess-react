import './Square.css'
import { pawnMoves, knightMoves, bishopMoves, rookMoves, kingMoves, getSquare } from '../../../scripts/pieceMoves'

const Square = ({pieceInfo, pieceLocations, updateActiveSquare, availableMoves, setAvailableMoves, activeSquare, movePiece, clearBoardStatus}) => {
    
    let {color, piece, occupied, target, column, row} = pieceInfo

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

    const hasAlreadyMoved = () => {
        if(piece=='p' && color=='white' && row==1){return false}
        if(piece=='k' && color=='white' && row==0 && column==4){return false}
        return true
    }

    const canCastleKing = () => {
        if(piece!='k' || color!='white' || hasAlreadyMoved()) return false;
        if(getSquare(pieceLocations,0,5,0,0).occupied){console.log('0,5 is occupied'); return false}
        if(getSquare(pieceLocations,0,6,0,0).occupied){console.log('0,6 is occupied'); return false}
        if(getSquare(pieceLocations,7,0,0,0).piece!='r' && getSquare(pieceLocations,7,0,0,0).color!='white'){console.log('rook is not there'); return false}
        return true
    }

    const canCastleQueen = () => {
        if(piece!='k' || color!='white' || hasAlreadyMoved()) return false;
        if(getSquare(pieceLocations,0,1,0,0).occupied) return false;
        if(getSquare(pieceLocations,0,2,0,0).occupied) return false;
        if(getSquare(pieceLocations,0,3,0,0).occupied) return false;
        if(getSquare(pieceLocations,0,0,0,0).piece!='r' && getSquare(pieceLocations,0,0,0,0).color!='white') return false;
        return true
    }

    let hoverable = color == 'white' ? 'hoverable' : ''
    let isAMove = checkIfMove() ? (checkIfAttack() ? 'attack' : 'move') : ''
    let isActive = checkIfActive() ? 'active' : ''

    const handleClick = () => {
        if(color=='white' && !checkIfActive()){
            updateActiveSquare(pieceLocations[row][column])
            if(piece == 'p'){
                setAvailableMoves(pawnMoves(pieceLocations, {column,row}, hasAlreadyMoved()))
            } else if(piece == 'n'){
                setAvailableMoves(knightMoves(pieceLocations, {column,row}))
            } else if(piece == 'b'){
                setAvailableMoves(bishopMoves(pieceLocations,{column, row}))
            } else if(piece == 'r'){
                setAvailableMoves(rookMoves(pieceLocations,{column, row}))
            } else if(piece == 'q'){
                setAvailableMoves([...bishopMoves(pieceLocations,{column, row}), ...rookMoves(pieceLocations,{column, row})])
            } else if(piece == 'k'){
                setAvailableMoves(kingMoves(pieceLocations, {column, row}, canCastleKing(), canCastleQueen()))
            }
        } else if (checkIfMove()){
            movePiece(pieceLocations[row][column])
        } else if(checkIfActive()){
            clearBoardStatus()
        }
    }
    
    return (
        <>
        <div onClick={handleClick} id={`${column}-${row}`} className={`square-container ${isAMove} ${isActive} ${target} ${hoverable} ${color} ${piece} ${getColor()}`}>
        </div>
        </>
    )
}

export default Square