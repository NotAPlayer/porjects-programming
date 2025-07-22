// TASK 1
let number = 10;
let result = 0;
for (let i = 1; i <= 10; i++) {

    result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}
// TASK 2
// this should incrementing and adding numbers from 1 to n
let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`The sum of the first ${n} numbers is: ${sum}`);

// TASK 3

let integers = [1,2,3,4,5];

for (let i=0; i<integers.length; i++) {
    console.log("Array Element: "+integers[i]);
}
// TASK 4

for (let i = 1; i <=5; i++) {
    let space = "";
    for (let j = 1; j <=i; j++) {
        space += "*";
    }
    console.log(space);
}

// TASK 5
let reverseArray = [1, 3, 5, 7, 9];

for (let i = reverseArray.length - 1; i >= 0; i--) {
    console.log("Reversed Element: " +reverseArray[i]);
}