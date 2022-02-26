// Halloween Sale
function howManyGames(p, d, m, s) {
    let cost = 0;
    let count = 0;
    while (cost + p <= s) {
        if (p - d > m) {
            cost += p;
            p -= d;
            count++;
        } else if (p - d <= m) {
            cost += p;
            p = m;
            count++;
        }
    }
    return count;
}
