function simpleArraySum(ar) {
    let answer = 0;
    ar.forEach((value) => {
        answer = answer + value;
    });
    return answer;
}
