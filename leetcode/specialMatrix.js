// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

// Input: mat = [[1,0,0],
//               [0,0,1],
//               [1,0,0]]
// Output: 1
// Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

// Input: mat = [[1,0,0],
//               [0,1,0],
//               [0,0,1]]
// Output: 3
// Explanation: (0,0), (1,1) and (2,2) are special positions.

// Input: mat = [[0,0,0,1],
//               [1,0,0,0],
//               [0,1,1,0],
//               [0,0,0,0]]
// Output: 2

// Special positions are when a 1 has only 0's in its neighboring columns and rows

const numSpecial = (mat) => {
    let num = 0;
    let xAxis = {};
    let yAxis = {};
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            //if the current number is 1, add its array index to the xAxis object
            //add its individual number index to the yAxis object
            // if the value of any key is more than one in the xAxis, it means that it has appeared more than once within the same array
            //if the value of any key is more than one in the yAxis, it means the individual element index (j) has appeared more than once in that specific position
            if (mat[i][j] === 1) {
                xAxis[i] ? xAxis[i] += 1 : xAxis[i] = 1
                yAxis[j] ? yAxis[j] += 1 : yAxis[j] = 1
            }
        };
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (xAxis[i] === 1 && yAxis[j] === 1) {
                num += 1
            }
        }
    }
    return num
}
console.log(numSpecial([[1, 0, 0],
[0, 0, 1],
[1, 0, 0]]))