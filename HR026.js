// Utopian Tree
function utopianTree(n) {
    let height = 1;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 1) {
            height++;
        } else {
            height = height * 2;
        }
    }
    return height;
}
