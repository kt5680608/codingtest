// Cut the Sticks
function cutTheSticks(arr) {
    let answer = [];
    while (arr.length !== 0) {
        let minValue = Math.min(...arr);
        answer.push(arr.length);
        for (let i = 0; i < arr.length; i++) {
            let sub = arr[i] - minValue;
            if (sub === 0) {
                arr.splice(i, 1);
                i -= 1;
            } else {
                arr[i] = sub;
            }
        }
    }
    return answer;
}
