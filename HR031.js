// Intro to Tutorial Challenges
function introTutorial(V, arr) {
    let answer = 0;
    arr.forEach((value, index) => {
        if (value === V) {
            answer = index;
        }
    });
    return answer;
}
