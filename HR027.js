// Angry Professor
function angryProfessor(k, a) {
    let notLate = 0;
    a.forEach((time) => {
        if (time <= 0) {
            notLate++;
        }
    });
    // return : 수업이 취소될 것인가?
    return notLate >= k ? "NO" : "YES";
}
