function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    const answer = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        } else {
            continue;
        }
    }
    answer.push(alice);
    answer.push(bob);
    return answer;
}
