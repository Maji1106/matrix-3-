function createMatrix(rows, columns) {
    let matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(columns).fill(0);
    }
    return matrix;
}

function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length, columnsA = matrixA[0].length,
        rowsB = matrixB.length, columnsB = matrixB[0].length;
    let resultMatrix = createMatrix(rowsA, columnsB);

    if (columnsA !== rowsB) {
        return null; // ไม่สามารถคูณได้
    }

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < columnsB; j++) {
            for (let k = 0; k < columnsA; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return resultMatrix;
}

    let matrixA = [[2, 1, 1], [3, 1, 2]];
    console.log(matrixA);
    let matrixB = [[4], [1], [2]]; //createMatrix(5,1);
    console.log(matrixB);
    console.log(multiplyMatrices(matrixA, matrixB));

