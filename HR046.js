// Sherlock and Squares
function squares(a, b) {
    let n = 1;
    let count = 0;
    while (n * n <= b) {
        if (n * n >= a && n * n <= b) {
            count++;
        }
        n++;
    }
    return count;
}
