//Sales by Match
function sockMerchant(n, ar) {
    let answer = 0;
    ar.sort((a, b) => a - b);
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === ar[i + 1]) {
            i++;
            answer++;
        }
    }
    return answer;
}
