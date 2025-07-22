// Task 1 and 2
let artifact1 = 10;
let artifact2 = 15;
let artifact3 = 12;
let totalcost = artifact1 + artifact2 + artifact3;
let average = (artifact1 + artifact2 + artifact3) / 3;

console.log("Total cost of artifacts: " + totalcost);
console.log("Average cost of artifacts: " + average);

// Task 3 - ODD or EVEN
let number = 15;

if (number % 2 === 0) {
    console.log("The number " + number + " is even.");
} else if (number % 2 === 1) {
    console.log("The number " + number + " is odd.");
}
// Task 4 Calculate Discounts
let price = 100;
let discount = 20;
let discountedPrice = (price * discount) / 100;
let finalPrice = price - discountedPrice;
console.log("Discounted Price: " + "₱" + finalPrice);