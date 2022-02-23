function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;
    arr.sort((a, b) => a - b);
    arr.forEach((value) => {
        minSum += value;
        maxSum += value;
    });
    minSum -= arr[arr.length - 1];
    maxSum -= arr[0];
    console.log(minSum, maxSum);
}
