// Designer PDF Viewer
function designerPdfViewer(h, word) {
    let index = 0;
    let tallest = 0;
    for (let i = 0; i < word.length; i++) {
        index = word.charCodeAt(i) - 97;
        if (h[index] > tallest) {
            tallest = h[index];
        }
    }
    return tallest * word.length;
}
