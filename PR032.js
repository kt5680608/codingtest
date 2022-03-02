// 스킬트리
function solution(skill, skill_trees) {
    let arr = [];
    let count = 0;
    let uniqueArr = skill_trees.map((value) => {
        return value.split("").filter((element) => skill.includes(element));
    });
    for (let i = 0; i < uniqueArr.length; i++) {
        let flag = true;
        for (let j = 0; j < uniqueArr[i].length; j++) {
            if (uniqueArr[i][j] !== skill[j]) {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            count++;
        }
    }
    return count;
}
