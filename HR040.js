// Chocolate Feast
function chocolateFeast(n, c, m) {
    let cost = n;
    let chocolate = c;
    let wrapper = m;
    let wrapperCount = 0;
    let count = 0;

    count += cost / chocolate;
    wrapperCount = cost / chocolate;
    while (wrapperCount >= wrapper) {
        count++;
        wrapperCount++;
        wrapperCount -= wrapper;
    }
    return parseInt(count);
}
