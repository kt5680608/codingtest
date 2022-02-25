// Migratory Birds
function migratoryBirds(arr) {
    let count = 0;
    let answer = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (count < arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1) {
            answer = arr[i];
            count = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
            // i를 전부 검색하면 time limit에 걸려서 같은 값을 제외하고 검색
            i = arr.lastIndexOf(arr[i]) + 1;
        } else if (
            count ===
            arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1
        ) {
            i = arr.lastIndexOf(arr[i]) + 1;
            continue;
        }
    }
    return answer;
}
