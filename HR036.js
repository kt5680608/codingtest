// Equalize the Array
function equalizeArray(arr) {
    arr.sort((a, b) => a - b);
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        max = Math.max(arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1, max);
        i = arr.lastIndexOf(arr[i]) + 1;
    }
    return arr.length - max;
}
