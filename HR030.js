//Minimum Distances
function minimumDistances(a) {
    let arr = [];
    a.forEach((num) => {
        if (a.indexOf(num) !== a.lastIndexOf(num)) {
            arr.push(a.lastIndexOf(num) - a.indexOf(num));
        }
    });
    let answer = Math.min.apply(null, arr);
    return arr.length === 0 ? -1 : answer;
}
