// Problem 1

let totalMoney = 1000;

let totalCost = 700;

let remainingMoney = totalMoney - totalCost;

console.log(remainingMoney);


// Problem 2

let mathMarks = 75.25;
let biologyMarks = 65;
let chemistryMarks = 80;
let physicsMarks = 35.45;
let banglaMarks = 99.50;

let avgMarks = (mathMarks + biologyMarks + chemistryMarks+ physicsMarks + banglaMarks) / 5;

console.log(avgMarks.toFixed(2));


// Problem 3

let num = 119;

let remainderOfTheNumber = 119 % 5;

console.log(remainderOfTheNumber);


// Problem 4

const a = isNaN('11');

console.log(a);

// In the above code, a is a variable which value can not be changed. After that, the output of the value a is false. Here the isNaN() function checks whether the value in it is a number or not, and it returns true if the value is not a number. On the other hand it returns false when the value is a number. In the above code we can see the value in isNaN() function is a string but the output is false, because the isNaN() function converts the value in a number then checks.


const b = isNaN(2 - 10);

console.log(b);

// In the above code, the value in the isNaN() function is actually a number which is (2 - 10) = -8. So, it returns false as it should be.