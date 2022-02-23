function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let startPoint = s;
    let endPoint = t;
    let appleTreeLocation = a;
    let orangeTreeLocation = b;
    let appleAnswer = 0;
    let orangeAnswer = 0;
    apples.forEach((value) => {
        if (
            value + appleTreeLocation >= startPoint &&
            value + appleTreeLocation <= endPoint
        ) {
            appleAnswer++;
        }
    });
    oranges.forEach((value) => {
        if (
            value + orangeTreeLocation >= startPoint &&
            value + orangeTreeLocation <= endPoint
        ) {
            orangeAnswer++;
        }
    });
    console.log(appleAnswer);
    console.log(orangeAnswer);
}
