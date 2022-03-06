// 문자열 압축
function solution(s) {
    if (s.length === 1) {
        return 1;
    }
    let answer = s.length;
    // (s.length /2)까지 for문 돌기 -> 몇개씩인지 셀꺼임
    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        // 0부터 length-1까지 for문 돌기 -> 어디서 부터 셀껀지
        let string = "";
        let count = 1;
        for (let j = 0; j < s.length; j += i) {
            let curr = s.substr(j, i);
            let next = s.substr(j + i, i);
            // 현재, 앞에 올거 비교하며 count(문자열 앞에 숫자)++해가면서 센다
            if (curr === next) {
                count++;
            }
            // 다르다면 count + 문자열
            else {
                if (count > 1) {
                    string = string + count + curr;
                    count = 1;
                } else {
                    string = string + curr;
                    count = 1;
                }
            }
        }
        if (answer > string.length) {
            answer = string.length;
        }
    }
    return answer;
}
