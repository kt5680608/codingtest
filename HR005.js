function diagonalDifference(arr) {
    let firstDiagonal = 0;
    let secondDiagnoal = 0;

    for (let i = 0; i < arr.length; i++) {
        firstDiagonal += arr[i][i];
        secondDiagnoal += arr[i][arr.length - i - 1];
    }
    return Math.abs(firstDiagonal - secondDiagnoal);
}
