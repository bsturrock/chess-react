

export const getSquare = (pieceLocations, row, column, x, y) => {
    let adjustedRow = row + x
    let adjustedCol = column + y
    try {
        let newSquare = pieceLocations[adjustedRow][adjustedCol]
        return newSquare
    } catch (e) {
        return false
    }
}


export const pawnMoves = (pieceLocations, activeSquare, hasMoved) => {
    const possibleMoves = []
    let {column, row} = activeSquare
    if(!hasMoved){
        let oneSquareUp = getSquare(pieceLocations, row, column, 1, 0)
        let twoSquareUp = getSquare(pieceLocations, row, column, 2, 0)
        if(!oneSquareUp.occupied){possibleMoves.push({column:oneSquareUp.column,row:oneSquareUp.row})}
        if(!twoSquareUp.occupied){possibleMoves.push({column:twoSquareUp.column,row:twoSquareUp.row})}
    } else if(hasMoved){
        let oneSquareUp = pieceLocations[row+1][column]
        if(!oneSquareUp.occupied){possibleMoves.push({column:oneSquareUp.column,row:oneSquareUp.row})}
    }
    return possibleMoves.filter((ele)=>ele.piece!='k').filter((ele) => ele.color!='white')
}

export const knightMoves = (pieceLocations, activeSquare) => {
    let {column, row} = activeSquare
    let tryMoves = [
        getSquare(pieceLocations, row, column,-1,2),
        getSquare(pieceLocations, row, column,1,2),
        getSquare(pieceLocations, row, column,1,-2),
        getSquare(pieceLocations, row, column,-1,-2),
        getSquare(pieceLocations, row, column,-2,1),
        getSquare(pieceLocations, row, column,2,1,),
        getSquare(pieceLocations, row, column,2,-1),
        getSquare(pieceLocations, row, column,-2,-1)
    ]

    let possibleMoves = tryMoves.filter((ele)=> ele ? true : false).filter((ele)=>ele.piece!='k').filter((ele) => ele.color!='white')

    return possibleMoves

}

export const rookMoves = (pieceLocations, activeSquare) => {
    let startColumn = activeSquare.column
    let startRow = activeSquare.row
    const potentialMoves = []
    while (startRow < 8){
        let sq = getSquare(pieceLocations, startRow, startColumn, 1, 0)
        if(!sq || sq.color=='white'){
            break;
        } else if(sq.color=='black'){
            potentialMoves.push(sq)
            break;
        } else {
            potentialMoves.push(sq)
        }
        startRow++
    }

    startColumn = activeSquare.column
    startRow = activeSquare.row
    while (startColumn < 8){
        let sq = getSquare(pieceLocations, startRow, startColumn, 0, 1)
        if(!sq || sq.color=='white'){
            break;
        } else if(sq.color=='black'){
            potentialMoves.push(sq)
            break;
        } else {
            potentialMoves.push(sq)
        }
        startColumn++
    }

    startColumn = activeSquare.column
    startRow = activeSquare.row
    while (startColumn > -1){
        let sq = getSquare(pieceLocations, startRow, startColumn, 0, -1)
        if(!sq || sq.color=='white'){
            break;
        } else if(sq.color=='black'){
            potentialMoves.push(sq)
            break;
        } else {
            potentialMoves.push(sq)
        }
        startColumn--
    }
    startColumn = activeSquare.column
    startRow = activeSquare.row
    while (startRow > -1){
        let sq = getSquare(pieceLocations, startRow, startColumn, -1, 0)
        if(!sq || sq.color=='white'){
            break;
        } else if(sq.color=='black'){
            potentialMoves.push(sq)
            break;
        } else {
            potentialMoves.push(sq)
        }
        startRow--
    }
    return potentialMoves.filter((ele)=>ele).filter((ele)=>ele.piece!='k')

}

export const bishopMoves = (pieceLocations, activeSquare) => {
    let startColumn = activeSquare.column
    let startRow = activeSquare.row

    const potentialMoves = []

    while(startColumn > -1 && startRow < 8){
        let sq = getSquare(pieceLocations,startRow,startColumn,1,-1)
        if(!sq || sq.color=='white'){
            break;
        } else if(sq.color=='black'){
            potentialMoves.push(sq)
            break;
        } else {
            potentialMoves.push(sq)
        }
        startColumn--
        startRow++
    }
    
    startColumn = activeSquare.column
    startRow = activeSquare.row

    while(startColumn < 8 && startRow < 8){
        let sq = getSquare(pieceLocations,startRow,startColumn,1,1)
        if(!sq || sq.color=='white'){
            break;
        } else if(sq.color=='black'){
            potentialMoves.push(sq)
            break;
        } else {
            potentialMoves.push(sq)
        }
        startColumn++
        startRow++
    }

    startColumn = activeSquare.column
    startRow = activeSquare.row

    while(startColumn < 8 && startRow > -1){
        let sq = getSquare(pieceLocations,startRow,startColumn,-1,1)
        if(!sq || sq.color=='white'){
            break;
        } else if(sq.color=='black'){
            potentialMoves.push(sq)
            break;
        } else {
            potentialMoves.push(sq)
        }
        startColumn++
        startRow--
    }

    startColumn = activeSquare.column
    startRow = activeSquare.row

    while(startColumn > -1 && startRow > -1){
        let sq = getSquare(pieceLocations,startRow,startColumn,-1,-1)
        if(!sq || sq.color=='white'){
            break;
        } else if(sq.color=='black'){
            potentialMoves.push(sq)
            break;
        } else {
            potentialMoves.push(sq)
        }
        startColumn--
        startRow--
    }
    return potentialMoves.filter((ele)=>ele).filter((ele)=>ele.piece!='k')
}


export const kingMoves = (pieceLocations, activeSquare, canCastleKing, canCastleQueen) => {
    let {column, row} = activeSquare
    let tryMoves = [
        getSquare(pieceLocations, row, column,-1,1),
        getSquare(pieceLocations, row, column,1,1),
        getSquare(pieceLocations, row, column,1,-1),
        getSquare(pieceLocations, row, column,-1,-1),
        getSquare(pieceLocations, row, column,-1,0),
        getSquare(pieceLocations, row, column,0,1,),
        getSquare(pieceLocations, row, column,0,-1),
        getSquare(pieceLocations, row, column,1,0)
    ]
    if(canCastleKing){
        tryMoves.push(getSquare(pieceLocations, 0,6,0,0))
    }
    if(canCastleQueen){
        tryMoves.push(getSquare(pieceLocations, 0,2,0,0))
    }
 
    let possibleMoves = tryMoves.filter((ele)=> ele ? true : false).filter((ele)=>ele.piece!='k').filter((ele)=>ele.color!='white')
    return possibleMoves
 

}