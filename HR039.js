// Beautiful Days at the Movies
function beautifulDays(i, j, k) {
    let dates = [];
    let count = 0;
    for (let a = i; a <= j; a++) {
        dates.push(String(a));
    }
    dates.forEach((day) => {
        // reverse
        let dayArr = day.split("");
        dayArr.reverse();
        let reverseDay = dayArr.join("");

        if (Math.abs(reverseDay - day) % k === 0) {
            count++;
        }
    });
    return count;
}
