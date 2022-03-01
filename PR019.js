// 폰켓몬
function solution(nums) {
    const arrUnique = nums.filter((value, index) => {
        return nums.indexOf(value) === index;
    });
    return arrUnique.length <= nums.length / 2
        ? arrUnique.length
        : nums.length / 2;
}
