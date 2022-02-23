function getTotalX(a, b) {
    const min = Math.min(...a);
    const max = Math.max(...b);
    const answer = [];

    const isFactorMin = (item, x) => x % item === 0;
    const isFactorMax = (item, x) => item % x === 0;

    for (let i = min; i <= max; i++) {
        if (a.every((el) => isFactorMin(el, i))) {
            if (b.every((el) => isFactorMax(el, i))) {
                answer.push(i);
            }
        }
    }
    return answer.length;
}
