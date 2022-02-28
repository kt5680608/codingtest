// Library Fine
function libraryFine(d1, m1, y1, d2, m2, y2) {
    let returnDate = new Date(y1, m1, d1);
    let dueDate = new Date(y2, m2, d2);
    if (dueDate >= returnDate) {
        return 0;
    } else {
        let count = 0;
        let dayDiff = 0;
        d1 - d2 > 0 ? (dayDiff = d1 - d2) : (dayDiff = 0);

        let monDiff = 0;
        m1 - m2 > 0 ? (monDiff = m1 - m2) : (monDiff = 0);

        let yearDiff = 0;
        y1 - y2 > 0 ? (yearDiff = y1 - y2) : (yearDiff = 0);

        if (dayDiff !== 0) {
            count = dayDiff * 15;
        }
        if (monDiff !== 0) {
            count = monDiff * 500;
        }
        if (yearDiff !== 0) {
            count = 10000;
        }
        return count;
    }
}
