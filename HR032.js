// Insertion Sort - Part 1
function insertionSort1(n, arr) {
    let value = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (value < arr[i - 1]) {
            arr[i] = arr[i - 1];
            console.log(arr.join(" "));
        }
        if (value < arr[i] && value > arr[i - 1]) {
            arr[i] = value;
            console.log(arr.join(" "));
        }
        if (value < arr[i] && arr[i - 1] === undefined) {
            arr[i] = value;
            console.log(arr.join(" "));
        }
    }
}
