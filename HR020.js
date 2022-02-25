// drawing book
function pageCount(n, p) {
    let distance = Math.min(p, n - p);
    if (p === 1 || p === n) {
        return 0;
    }
    if (distance === 1 && n % 2 === 1) {
        return 0;
    }
    if (distance === 1) {
        return 1;
    }
    return Math.round((distance - 1) / 2);
}
