

const getSquare = (pieceLocations, row, column, x, y) => {
    try {
        let newSquare = pieceLocations[row+x][column+y]
        if(newSquare.occupied==true && newSquare.color=='white')return false
        return newSquare
    } catch (e) {
        return false
    }
}


export const pawnMoves = (pieceLocations, activeSquare, hasMoved) => {
    const possibleMoves = []
    let {column, row} = activeSquare
    console.log(column, row)
    if(!hasMoved){
        let oneSquareUp = getSquare(pieceLocations, row, column, 1, 0)
        let twoSquareUp = getSquare(pieceLocations, row, column, 2, 0)
        console.log('onesquareup:', oneSquareUp)
        console.log('twosquareup:', twoSquareUp)
        if(!oneSquareUp.occupied){possibleMoves.push({column:oneSquareUp.column,row:oneSquareUp.row})}
        if(!twoSquareUp.occupied){possibleMoves.push({column:twoSquareUp.column,row:twoSquareUp.row})}
    } else if(hasMoved){
        let oneSquareUp = pieceLocations[row+1][column]
        if(!oneSquareUp.occupied){possibleMoves.push({column:oneSquareUp.column,row:oneSquareUp.row})}
    }
    console.log('possible moves: ', possibleMoves)
    return possibleMoves
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

    let possibleMoves = tryMoves.filter((ele)=> ele ? true : false)

    return possibleMoves

}

export const rookMoves = (pieceLocations, activeSquare) => {
    let startColumn = activeSquare.column
    let startRow = activeSquare.row
    const potentialMoves = []
    while (startRow < 8){
        let sq = getSquare(pieceLocations, startRow, startColumn, 1, 0)
        if(sq.color=='white' || !sq){
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
        if(sq.color=='white' || !sq){
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
        if(sq.color=='white' || !sq){
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
        if(sq.color=='white' || !sq){
            break;
        } else if(sq.color=='black'){
            potentialMoves.push(sq)
            break;
        } else {
            potentialMoves.push(sq)
        }
        startRow--
    }
    return potentialMoves.filter((ele)=>ele)

}

export const bishopMoves = (pieceLocations, activeSquare) => {
    let startColumn = activeSquare.column
    let startRow = activeSquare.row

    const potentialMoves = []
    

    while(startColumn > -1 && startRow < 8){
        let sq = getSquare(pieceLocations,startRow,startColumn,1,-1)
        if(sq.color=='white' || !sq){
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
        if(sq.color=='white' || !sq){
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
        if(sq.color=='white' || !sq){
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
        if(sq.color=='white' || !sq){
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
    console.log(potentialMoves)
    return potentialMoves.filter((ele)=>ele)
}