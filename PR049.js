// 구명보트
function solution(people, limit) {
    people = people.sort((a, b) => b - a);
    let left = 0;
    let right = people.length - 1;
    let count = 0;
    while (left < right) {
        let weight = people[left] + people[right];
        if (weight <= limit) {
            left++;
            right--;
            count++;
        } else if (weight > limit) {
            left++;
            count++;
        }
        if (left === right) {
            count++;
        }
    }
    return count;
}
