//exercise 1
var thisIsANewVariable = 10;
if ( thisIsANewVariable == 10 ) {
    // code block
}

//exercise 2
console.log("Exercise 2:");
let stringVariable = `string`;
let numberVariable = 1.5;
let booleanVariable = true;

console.log(`${stringVariable}`);

//exercise 3
let currentScore = 95; //Integer variable keeping track of current score

//exercise 4
console.log("\nExercise 4:");
console.log('100' == 100);
console.log('100' === 100);

//exercise 5
console.log("\nExercise 5:");
let isWeekend = false;
let schedule;

schedule = isWeekend ? "Day off" : "Work day";

console.log(schedule);

//exercise 6
console.log("\nExercise 6:");

let userAge = 16;

if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

//exercise 7
console.log("\nExercise 7:");

let hasPermission = true;
let itemCount = 3;

if (hasPermission === true && itemCount < 5) {
  console.log("Ready to process");
}

//exercise 8
console.log("\nExercise 8:");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//exercise 9
console.log("\nExercise 9:");

for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

//exercise 10
console.log("\nExercise 10:");

let counter = 10;

do {
  console.log("Running once");
} while (counter < 0);

//exercise 11
console.log("\nExercise 11:");

function calculateArea(width, height) {
  return width * height;
}

let resultArea = calculateArea(5, 10);

console.log(resultArea);

//exercise 12
console.log("\nExercise 12:");

let fruitList = ["Apple", "Banana"];

fruitList.push("Grape");

fruitList.shift();

console.log(fruitList.indexOf("Banana"));

//exercise 13
console.log("\nExercise 13:");

let originalData = [1, 2, 3, 4, 5];

let clonedData = originalData.slice();

console.log(clonedData);

//exercise 14
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

//exercise 15
console.log("\nExercise 15:");

// Assuming Animal constructor exists
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

// Create instances
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");

// Store in an array
let animalArray = [dog, cat];

console.log(animalArray);
