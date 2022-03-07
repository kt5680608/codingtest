// 체육복
function solution(n, lost, reserve) {
    let count = 0;
    if (lost.length === 0) {
        return n;
    }
    // 여벌이 있음 근데 한벌을 훔쳐감 ㅋㅋ
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                lost.splice(i, 1);
                reserve.splice(j, 1);
                i--;
                j--;
            }
        }
    }

    let lostLen = lost.length;
    lost = lost.sort((a, b) => a - b);
    reserve = reserve.sort((a, b) => a - b);
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j] + 1) {
                count++;
                lost.splice(i, 1);
                reserve.splice(j, 1);
                i--;
                j--;
            }
            if (lost[i] === reserve[j] - 1) {
                count++;
                lost.splice(i, 1);
                reserve.splice(j, 1);
                i--;
                j--;
            }
            if (lost.length === 0 || reserve.length === 0) {
                break;
            }
        }
    }
    return n - lostLen + count;
}
