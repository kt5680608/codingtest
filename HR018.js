// Bill Division
function bonAppetit(bill, k, b) {
    let sum = 0;
    bill.splice(k, 1);
    bill.forEach((price) => {
        sum += price;
    });
    if (sum / 2 === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b - sum / 2);
    }
}
