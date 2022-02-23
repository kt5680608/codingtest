function birthdayCakeCandles(candles) {
    candles.sort((a, b) => b - a);
    let max = candles[0];
    let answer = 0;

    candles.forEach((value) => {
        if (max === value) {
            answer++;
        }
    });
    return answer;
}
