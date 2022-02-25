// Counting Valley
function countingValleys(steps, path) {
    let valleyCount = 0;
    let valleyFlag = false;
    let currentHeight = 0;
    let pathArray = path.split("");

    pathArray.forEach((step) => {
        // 현재 높이 구하기
        step === "U" ? currentHeight++ : currentHeight--;
        // valley 시작
        if (valleyFlag === false && currentHeight < 0) {
            valleyCount++;
            valleyFlag = true;
        }
        // valley 끝
        if (valleyFlag === true && currentHeight >= 0) {
            valleyFlag = false;
        }
    });
    return valleyCount;
}
