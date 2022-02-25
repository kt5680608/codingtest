// Viral Advertising
function viralAdvertising(n) {
    let people = 5;
    let likes = 0;
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        likes = Math.floor(people / 2);
        answer = answer + likes;
        people = likes * 3;
    }
    return answer;
}
