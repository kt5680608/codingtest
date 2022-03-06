//프린터
function solution(priorities, location) {
    let dict = [];
    let max = Math.max(...priorities);
    for (let i = 0; i < priorities.length; i++) {
        dict.push([priorities[i], i]);
    }
    let count = 0;
    while (true) {
        if (dict[0][0] < max) {
            dict.push(dict[0]);
            dict.shift();
        } else {
            count++;

            outIdx = dict[0][1];
            if (outIdx == location) {
                break;
            }

            dict.shift();

            tmpMax = dict[0][0];
            for (let i = 0; i < dict.length; i++) {
                if (dict[i][0] > tmpMax) {
                    tmpMax = dict[i][0];
                }
            }
            max = tmpMax;
        }
    }
    return count;
}
