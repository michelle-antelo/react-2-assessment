function unroll(squareArray) {
    let finalArray = [];
    
    do {
        if (squareArray.length > 0){
            for (i = 0; i < squareArray[0].length; i=i){
                finalArray.push(squareArray[0][i])
                squareArray[0].shift(i);
            }
            
            squareArray.shift(0);
        }

        if (squareArray.length > 0){
            for (i = 0; i < squareArray.length; i++){
                let lastArrayIndex = squareArray[i].length -1;
                finalArray.push(squareArray[i][lastArrayIndex]);
                squareArray[i].pop(lastArrayIndex);
            }
        }

        if (squareArray.length > 0){
            for (i = 0; i < squareArray[squareArray.length - 1].length; i=i){
                let thisArray = squareArray.length - 1;
                let lastArrayIndex = squareArray[squareArray.length - 1].length - 1;
                finalArray.push(squareArray[thisArray][lastArrayIndex]);
                squareArray[thisArray].pop(lastArrayIndex);
            }
        
            squareArray.pop(squareArray.length - 1);
        }

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


const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];

unroll(square);
unroll(smallerSquare);