function timeConversion(s) {
    const originalTime = s.substr(0, 8);
    const time = s.substr(0, 2);
    const ap = s.substr(8, 9);
    const hour = Number(time);

    if (ap === "PM") {
        if (hour === 12) {
            return originalTime;
        }
        return String(hour + 12) + s.substr(2, 6);
    }
    if (ap === "AM") {
        if (hour === 12) {
            return "00" + s.substr(2, 6);
        }
        if (hour < 12) {
            return originalTime;
        }
    }
}
