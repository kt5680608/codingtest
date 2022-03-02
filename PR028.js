// 2016년
function solution(a, b) {
    days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let startDate = new Date(2016, 0, 1);
    let endDate = new Date(2016, a - 1, b);
    let ms = endDate.getTime() - startDate.getTime();
    let day = ms / (1000 * 60 * 60 * 24);
    return days[day % 7];
}
