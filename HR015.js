function breakingRecords(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let maxChange = 0;
    let minChange = 0;

    scores.forEach((value) => {
        if (value > maxScore) {
            maxScore = value;
            maxChange++;
        }
        if (value < minScore) {
            minScore = value;
            minChange++;
        }
    });
    return [maxChange, minChange];
}
