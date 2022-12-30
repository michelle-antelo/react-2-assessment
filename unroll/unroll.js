function unroll(squareArray) {
    let finalArray = [];
    
    // While the array has items
    do {
        // Pushes values of squareArray[0] then removes squareArray[0]
        if (squareArray.length > 0){
            for (i = 0; i < squareArray[0].length; i=i){
                finalArray.push(squareArray[0][i])
                squareArray[0].shift(i);
            }
            squareArray.shift(0);
        }
        // Adds last value of each array to finalArray before popping it.
        if (squareArray.length > 0){ 
            for (i = 0; i < squareArray.length; i++){
                let lastArrayIndex = squareArray[i].length -1;
                finalArray.push(squareArray[i][lastArrayIndex]);
                squareArray[i].pop(lastArrayIndex);
            }
        }

        // Pushes values of last array in reverse before deleting it.
        if (squareArray.length > 0){
            for (i = 0; i < squareArray[squareArray.length - 1].length; i=i){
                let thisArray = squareArray.length - 1;
                let lastArrayIndex = squareArray[squareArray.length - 1].length - 1;
                finalArray.push(squareArray[thisArray][lastArrayIndex]);
                squareArray[thisArray].pop(lastArrayIndex);
            }
        
            squareArray.pop(squareArray.length - 1);
        }
        // Adds first value of each array to finalArray from bottom to top before shifting it
        if (squareArray.length > 0){
            for (i = squareArray.length; i > 0; i--){
                finalArray.push(squareArray[i - 1][0]);
                squareArray[i - 1].shift(0);
            }
        }
    } 
    while (squareArray.length > 0);
    return finalArray
}

module.exports = unroll;