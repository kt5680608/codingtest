// 핸드폰 번호 가리기
function solution(phone_number) {
    let phoneNumber = phone_number.split("");
    let count = 0;
    for (let i = phoneNumber.length - 1; i >= 0; i--) {
        if (count > 3) {
            phoneNumber.splice(i, 1, "*");
        }
        count++;
    }
    return phoneNumber.join("");
}
