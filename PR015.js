// 문자열 다루기 기본
function solution(s) {
    if (s.length === 4 || s.length === 6) {
        s = s.split("");
        for (let i = 0; i < s.length; i++) {
            if (s[i].charCodeAt(0) > 65) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
