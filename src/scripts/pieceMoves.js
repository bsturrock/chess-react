
export const pawnMoves = (pieceLocations, activeSquare, hasMoved) => {
    const possibleMoves = []
    let {column, row} = activeSquare
    let oneSquareUp = pieceLocations[row+1][column]
    let twoSquareUp = pieceLocations[row+2][column]
    if(!oneSquareUp.occupied){possibleMoves.push({column,row:row+1})}
    if(!twoSquareUp.occupied){possibleMoves.push({column,row:row+2})}
    return possibleMoves
    
}