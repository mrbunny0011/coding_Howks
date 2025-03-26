// + Creating and Accessing Objects
// Create an object car with properties: make, model, year, and color.
const car = {
    make : "Honda",
    model : "Civic",
    year : "2025",
    color : "Black"
}

// Access and print the make and model of the car.
console.log(car.make);
console.log(car["model"]);

// ==========================================================
// Methods in Objects
// Add a method to the car object that returns a description of the car (e.g., "This is a [color] [make] [model] from [year].").
car.description = function(){
    console.log(`This is a ${this.color} ${this.make} ${this.model} from ${this.year}`);
}

// Call the method to print the car's description.
console.log(car.description());

// ============================================================
// Object Destructuring
// Create an object person with properties: firstName, lastName, age.
const person = {
    firstName : "Abdul",
    lastName : "Basit",
    age : "21"
}

// Use object destructuring to extract firstName and age into separate variables and print them.
const {firstName , lastName , age : a} = person;
console.log(firstName, lastName ,`and my age ${a}`);

// ============================================================
// JSON Manipulation
// Convert the person object from the previous exercise into a JSON string.
const jsonString = JSON.stringify(person);
console.log(jsonString);

// Parse the JSON string back into a JavaScript object and print it.
const obj = JSON.parse(jsonString);
console.log(obj);

// ============================================================
// Using forEach
// Create an array of numbers [1, 2, 3, 4, 5].
let numbers = [1,2,3,4,5];

// Use forEach to print each element of the array squared.
numbers.forEach((num)=>{
    console.log( num , " square" , num*num);
});

// ============================================================
// Using map
// Create an array of strings ["apple", "banana", "cherry"].
let fruits = ["apple", "banana", "cherry"];

// Use map to create a new array where each string is capitalized, then print the new array.
const newFruits= fruits.map((f)=>{
   return f.toUpperCase();
});
console.log(newFruits);

// ============================================================
// Using filter
// Create an array of numbers [5, 10, 15, 20, 25].
let arrayNumber = [5, 10, 15, 20, 25];

// Use filter to get all numbers that are greater than or equal to 15 and print them.
let filterArray = arrayNumber.filter( (num)=>{
    return (num >= 15);
} );

console.log(filterArray);

// ============================================================
// Using reduce
// Create an array of numbers [1, 2, 3, 4, 5].
const newArray =  [1, 2, 3, 4, 5];

// Use reduce to find the sum of the numbers in the array.
let reduceArray = newArray.reduce((pre , cur)=>{
    return (pre + cur);
});
 console.log(reduceArray);

 // ============================================================
//  Filter Method
//  Create an array of mixed numbers [10, 15, 20, 25, 30].
const numarray =  [10, 15, 20, 25, 30 ,33, ,44, 55];

// Write a function that uses filter to return only the numbers divisible by 5 and print the result.
let filtedNumarray = numarray.filter((f)=>{
    return (f%5 === 0 );
})
console.log(filtedNumarray);

// ============================================================
// Map Method
// Create an array of strings ["john", "jane", "jack"].
const name =  ["john", "jane", "jack"]; 

// Use map to convert each name to uppercase and print the new array.
let mapArray = name.map ((n)=>{
    return n.toUpperCase();
})
console.log(mapArray);

// ============================================================
// Reduce Method
// Create an array of numbers [2, 4, 6, 8].
const newNumbers = [2,4,6,8];

// Use reduce to calculate the product of all the numbers and print the result.
const reduceNumber = newNumbers.reduce((pre, cur)=>{
    return (pre*cur);
})
console.log(reduceNumber);

// ============================================================
// Math Object
// Write a function that generates a random number between 1 and 100 and returns it.
function randomNumber(){
    let num = Math.random()*100;
    let random= Math.floor(num);
    return random;
}
console.log(randomNumber());

// Round the number to the nearest integer using Math.round() and print the result.
let x = 3.7;
console.log(Math.round(x));

// ============================================================
// Date Object
// Write a function that takes a date string "2025-03-15" and returns the day of the week (e.g., "Monday").
function returnDay(date){
    let d = new Date(date);
    switch (d.getDay()){
        case 0:{
            return "Sunday"
        }
        case 1:{
            return "Monday";
        }
        case 2:{
            return "Tuesday";
        }
        case 3:{
            return "Wednesday";
        }
        case 4:{
            ;return "Thursday";
        }
        case 5:{
            return "Friday";
        }
        case 6:{
            return "Saturday";
        }
        default : {
            return "Invalid Date";
        }
        
    }
    
}
console.log(returnDay("2025-03-30"));

// Convert the string date into a Date object and print it.
let date = '2025-03-02';
let d = new Date(date);
console.log(d);

// ============================================================
// Date Methods
// Write a function that calculates the difference between two dates and returns the number of days between them.
function returnDifferenceDays(firstDate , secondDate){
    let fd = new Date(firstDate);
    let sd = new Date(secondDate);
    let dif = (fd-sd)/(1000*60*60*24);
    return dif; 
}
console.log(returnDifferenceDays("2025-03-10", "2024-03-10"));

// ============================================================
// Try-Catch Example
// Write a function that takes two numbers and divides them. Use a try-catch block to handle any potential division by zero errors and return a message ("Cannot divide by zero") in case of an error.
function division(num1, num2){
    try {
        if(num2 === 0){
            throw SyntaxError("Division by Zero is not possible");
        }
        return num1/num2
    } catch (error) {
        return (error.message)
    }
    
}
console.log(division(2,0));

// ============================================================
// Custom Errors
// Write a function that checks whether an input number is positive. If the number is negative, throw a custom error with the message: "Negative number not allowed".
function checkNumber(num){
    if (num>=0){
        return num;
    }
    else{
        throw SyntaxError("Negative number not allowed");
    }
}
console.log(checkNumber(7));

// ============================================================
// Throwing Errors
// Create a function that attempts to parse a JSON string. If the string is not valid JSON, throw a custom error and catch it using a try-catch block.
function JsonToParse(json){
    try {
        return (JSON.parse(json));
    } catch (error) {
        throw new Error("Invalid JSON format: " + error.message);
    }
}
try {
    console.log(JsonToParse('{"name": "basit", "age": 21}'));
  } catch (error) {
    console.log(error.message); 
  }
