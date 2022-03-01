// 부족한 금액 계산하기
function solution(price, money, count) {
    for (let i = 1; i <= count; i++) {
        money = money - price * i;
    }
    return money < 0 ? Math.abs(money) : 0;
}
