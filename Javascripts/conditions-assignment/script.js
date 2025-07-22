// TASK 1

let score = 59;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");

} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// TASK 2 

let temperature = 30;

if (temperature > 30) {
    console.log("It's hot outside. Stay hydrated!");
} else if (temperature >= 16) {
    console.log("The weather is nice. Enjoy your day!");
} else if (temperature >= 0) {
    console.log("It's cold outside. Wear a jacket.");
} else {
    console.log("It's freezing outside! Bundle up!");
}

// TASK 3

let age = 21;
if (age >= 18) {
    console.log("You are eligible for this activity.");
}  else if (age >= 13 && age <= 17) { // ewan if tama po pero dahil pwede naman po itong (age >= 13) pero may "Between"
    console.log("You need parental permission.")
} else if (age > 13) {
    console.log("You are too young for this activity.");
}
// TASK 4
//can't make it 'age' as it is already used in TASK 3
let edad = 18;
let isMember = false;

if (edad < 12) {
    console.log("Price : Free");
} else if (edad >= 12 && isMember) {
    console.log("Price : $10 (Discounted for members)");
} else if (edad >= 12 && !isMember) {
    console.log("Price : $20 (Regular price)");
}

// I dunno if all should be in If - else statements or if I can use switch case
