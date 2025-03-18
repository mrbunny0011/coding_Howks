// 1. Variables and Scope
// Declare a variable age and calculate your birth year. Output both.
let age = 21;
let currentYear=new Date().getFullYear();
console.log(currentYear-age);

// Declare a variable x inside a function and try to access it outside. What happens?
function callingX(){
    let x = 10; //local Scope variable
}
 console.log(x); //Ans: it give Error. Because x inside a function is a local Scope variable. it only work inside the Function


// 2. Data Types and Operators
// Calculate the sum, difference, product, and quotient of two numbers.
let num1 = 10;
let num2 = 20;
console.log("Sum : " + (num1 + num2 ));
console.log("Difference: " + (num1 - num2) );
console.log("Product : " + (num1 * num2) );
console.log("Quotient : " + (num1 / num2) );

// Convert a string "123" to a number and back to a string. Print both.
var string = "123";
string = Number(string);
console.log(typeof string  + string);
string =String(string);
console.log(typeof string + string);

// Check if a number is even or odd using the modulo operator.
let inputNumber = prompt("Enter Your Number ");
console.log(inputNumber%2 === 0 ?  "Even Number " : "Odd Number " );


// 3. Control Flow (if-else, ternary, switch)
// Write a program that checks if a person is a child, teenager, adult, or senior based on age.
let checkAge = prompt("Enter Your Number ");
if (checkAge > 0 && checkAge < 13) {
  console.log("Child");
} else if (checkAge >= 13 && checkAge < 20) {
  console.log("Teenager");
} else if (checkAge >= 20 && checkAge < 45) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// Use a ternary operator to check if a number is positive, negative, or zero.
let checkNumber = prompt("Enter Your Number ");
console.log(checkNumber > 0 ?  "positive" : checkNumber == 0 ? "Zero" : "Negative"  );


// Simulate a traffic light with a switch statement: "Stop", "Ready", or "Go".
let light = prompt("Enter your Light ");
switch (light){
    case "Green" :  {
        console.log("Go");
        break;
    }
    case "Red" :  {
        console.log("Stop");
        break;
    }
    case "Orange" :  {
        console.log("Ready");
        break;
    }
    default:  {
        console.log("invalid Input");
        break;
    }
}

// 4. Loops (for, while, do-while)
// Print the numbers 1 to 10 using a for loop.
for(let i = 1 ; i <= 10 ; i++ ){
    console.log(i);
}

// Create a while loop that asks the user for input until they type "stop".
let input ="";
while (input !== "stop"){
    input = prompt("Enter Your input : ");
    console.log(" your input : ", input);
}

// Print the multiplication table of 5 using a do-while loop.
let i = 1;
do {
    console.log("5 x ",i," = ", i * 5);
    i++;
}while(i<=10);

// 5. Functions
// Write a greet function that takes a name and prints a greeting.
function greet( name){
    console.log("Assalam - o - Alikum ", name);
}
greet("Abdul Basit");

// Create a function that returns the sum of two numbers.
function sum(a, b) {
    return a + b;
}
console.log(sum(9, 7));

// Write a function that returns the highest number from a list of numbers.
function highestNumber( list ){
    let high = list[0];
    for ( let a of list ){
        a>high ? high = a : high = high;
    }
    return high;
}
let highest = highestNumber([2,3,4,5,6,7,8,9]);
console.log(highest);


// Arrow Functions
// Convert the greet function into an arrow function.
 let greet = ( name) => {
    console.log("Assalam - o - Alikum ", name);
}
greet("Abdul Basit");

// Write an arrow function square that returns the square of a number.
let square =(input)=>{
    let square = input*input;
    return square;
}
console.log(square(4));


// Write an arrow function that returns the first string longer than 5 characters from a list.
let getFirstLongString = (list) => {
    for (l of list){
        if( l.length > 5){
            return l
        }
    }
}
let words = ["cat", "apple", "banana", "grape"];
console.log(getFirstLongString(words));

// 7. Arrays
// Create an array of numbers and sum all the elements using a loop.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
for (let num of arr) {
  sum += num;
}
console.log(sum);

// Find the longest name in an array of names.
let names=["ali","saad","moeed"];
let longestName="";
for(let name of names){
    if (name.length > longestName.length){
        longestName = name;  
    }
}
console.log(longestName);


//Remove duplicates from an array of numbers manually.
let array =[1,1,2,3,3,2,4,32,4,5,4,3];
function removeDuplocates(array){
    for(let j = 0; j<array.length ; j++){
        for(let i = j+1; i<array.length ; i++){
            if( array[j] == array[i]){
                array.splice(i,1);
                
            }
        }
    }
    
}
removeDuplocates(array);
console.log(array);
