// Repeated String
function repeatedString(s, n) {
    let count = 0;
    let repeatCount = 0;
    let remainCount = parseInt(n % s.length);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            repeatCount++;
        }
    }
    count += repeatCount * parseInt(n / s.length);
    if (remainCount >= 1) {
        for (let j = 0; j < remainCount; j++) {
            if (s[j] === "a") {
                count++;
            }
        }
    }
    return count;
}
