// 행렬의 덧셈
function solution(arr1, arr2) {
    let newArr = [];
    let answerArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[0].length; j++) {
            newArr.push(arr1[i][j] + arr2[i][j]);
        }
        answerArr.push(newArr);
        newArr = [];
    }
    return answerArr;
}
