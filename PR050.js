// 숫자 문자열과 영단어
function solution(s) {
    let alphabet = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let finder = [];
    let answer = [];
    var checkEng = /[a-zA-Z]/;
    for (let i = 0; i < s.length; i++) {
        if (checkEng.test(s[i]) === true) {
            finder.push(s[i]);
            let string = finder.join("");
            if (alphabet.indexOf(string) !== -1) {
                answer.push(alphabet.indexOf(string));
                finder = [];
                string = "";
            }
            finder = string.split("");
        } else {
            answer.push(s[i]);
        }
    }
    return Number(answer.join(""));
}
