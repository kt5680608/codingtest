function divisibleSumPairs(n, k, ar) {
    let answer = 0;
    for (let i = 0; i < ar.length - 1; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                console.log(ar[i], ar[j]);
                answer++;
            }
        }
    }
    return answer;
}
