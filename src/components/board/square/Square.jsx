import './Square.css'
import { pawnMoves } from '../../../scripts/pieceMoves'

const Square = ({column, row, pieceInfo, pieceLocations, updateActiveSquare, availableMoves, setAvailableMoves, activeSquare}) => {
    
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

    let hoverable = color == 'white' ? 'hoverable' : ''
    let isAMove = checkIfMove() ? 'move' : ''
    let isActive = activeSquare.column==column && activeSquare.row==row ? 'active' : ''

    const handleClick = () => {
        if(color=='white'){
            updateActiveSquare(column, row)
            setAvailableMoves(pawnMoves(pieceLocations, {column,row}, false))
            console.log(availableMoves)
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