// Append and Delete
function appendAndDelete(s, t, k) {
    if (s.length + t.length <= k) {
        return "Yes";
    }

    let count = 0;
    let sArr = s.split("");
    let tArr = t.split("");
    let len = Math.max(sArr.length, tArr.length);
    let sArrRemain = 0;
    let tArrRemain = 0;
    for (let i = 0; i < len; i++) {
        if (sArr[i] === tArr[i]) {
            continue;
        } else {
            sArrRemain = sArr.length - i;
            tArrRemain = tArr.length - i;
            if (sArrRemain < 0) {
                sArrRemain = 0;
            }
            if (tArrRemain < 0) {
                tArrRemain = 0;
            }
            count = sArrRemain + tArrRemain;
            break;
        }
    }
    return count <= k && count % 2 === k % 2 ? "Yes" : "No";
}
