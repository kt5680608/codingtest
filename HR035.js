// Circular Array Rotation
function circularArrayRotation(a, k, queries) {
    let answer = [];
    for (let i = 0; i < k; i++) {
        a.unshift(a.pop());
    }
    for (let i = 0; i < queries.length; i++) {
        answer.push(a[queries[i]]);
    }
    return answer;
}
