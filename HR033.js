// Insertion Sort - Part 2
function insertionSort2(n, arr) {
    for (let j = 1; j < arr.length; j++) {
        let unsorted = arr[j];
        for (let i = j - 1; i > -1; i--) {
            if (unsorted < arr[i]) {
                arr[i + 1] = arr[i];
                arr[i] = unsorted;
            } else {
                arr[i + 1] = unsorted;
                break;
            }
        }
        console.log(arr.join(" "));
    }
}
