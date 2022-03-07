// 올바른 괄호
function solution(s) {
    let flag = 0;
    s = [...s];
    if (s[0] === ")") {
        return false;
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                flag++;
            } else if (flag >= 1 && s[i] === ")") {
                flag--;
            }
        }
    }
    return flag === 0 ? true : false;
}
