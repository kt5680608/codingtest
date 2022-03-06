// 위장
function solution(clothes) {
    let answer = 1;
    let style = {};
    for (let i = 0; i < clothes.length; i++) {
        if (clothes[i][1] in style === true) {
            style[clothes[i][1]]++;
        } else {
            style[clothes[i][1]] = 1;
        }
    }
    let valueArr = [];
    for (key in style) {
        valueArr.push(style[key]);
    }
    for (let i = 0; i < valueArr.length; i++) {
        answer = answer * (valueArr[i] + 1);
    }
    return answer - 1;
}
