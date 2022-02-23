function gradingStudents(grades) {
    const answer = [];
    grades.forEach((value) => {
        if (value % 5 >= 3 && value > 37) {
            while (value % 5 !== 0) {
                value += 1;
            }
        }
        answer.push(value);
    });
    return answer;
}
