function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    arr.forEach((value) => {
        if (value > 0) {
            positive++;
        } else if (value < 0) {
            negative++;
        } else {
            zero++;
        }
    });
    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}
