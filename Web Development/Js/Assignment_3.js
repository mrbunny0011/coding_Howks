// Async JavaScript Fundamentals
// Create a function delay that returns a promise that resolves after a specified amount of time (in milliseconds).
function delay(){
    return new Promise((res ,rej)=>{
        setTimeout(()=>{
            console.log("Promise Run after 2 second");
        },2000)
    })
}
delay();

// Use async and await to fetch data from a sample API (you can use https://jsonplaceholder.typicode.com/posts) and log the result.
async function takingData(){
    try {
        let rawData = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await rawData.json();
        console.log(data);
    } catch (error) {
        console.log("Error!  ",error);
    }
}
takingData();
// ==========================================================

// API Requests & V8 Engine
// Create an asynchronous function getWeather that makes an API request to a weather API (for example, https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY) and logs the weather information.
async function getWeather(){
  const key="215548c1f6f68b4a167c64a52a7680a9"; //using Faiza Shakeel key and API
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`);
    let data = await weather.json();
    console.log(data);
    
}
getWeather();
// ===========================================================

// Promise
// Create a function isEven that returns a promise. The promise resolves if a number is even and rejects if it’s odd.
function isEven(){
  return new Promise((res , rej )=>{
    let num = 4;
    if (num%2 == 0 ){
      return res("Number is Even");
    }
    else{
      return rej("Number is Odd");
    }
  })
}
let ans = isEven();
ans.then((message)=>{console.log(message)})
ans.catch((message)=>{console.log(message)})
// ==============================================================

// Fetch
// Use the fetch() function to fetch a list of posts from https://jsonplaceholder.typicode.com/posts and display the titles of the posts in the console.
async function post(){
      let rawData = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await rawData.json();
      let titles = data.map((t)=>{return t.title})
      console.log(titles);
}
post();
// ===========================================================

// Object-Oriented Programming
// Create a class Animal with properties name and age, and a method speak() that logs "Hello, my name is [name] and I am [age] years old."
class Animal{
      name = "Abdul Basit";
      age =21;
      speak() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
}
// Create a new object of the Animal class and call the speak method.
obj = new Animal();
obj.speak();
// ==========================================================

// Create a class Car with a constructor that accepts make, model, and year as parameters.
//  Add a method getCarInfo to display the car’s information.
class Car{
  static objnumber = 0;
  constructor(make , model , year){
    this.make = make;
    this.model = model;
    this.year = year;
    Car.objnumber++;
  }
  getCarInfo(){
    console.log(`This car make by ${this.make} in year ${this.year} with model name ${this.model}`);
  }
   static getCarCount(){
    return this.objnumber;
  }
}
const obj2 = new Car("Honda","Civic","2025");
const obj3 = new Car("Honda","City","2025");
obj2.getCarInfo();


// Add a static method getCarCount that returns the total number of Car objects created
//  (you can use a static variable to keep track of the count).
console.log(Car.getCarCount());
