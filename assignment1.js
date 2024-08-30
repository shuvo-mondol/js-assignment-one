// 1. Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";
console.log(carName)


// 2. On one single line, declare three variables with the following names and values:
const singleLine = {
    FirstName: "John",
    lastName: "Doe",
    age: 35,
}
console.log(singleLine)


// 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).
const number = [10];
let y1 = number.map(function(value){
    return value * 5
})
console.log(y1)


// 4. Use comments to describe the correct data type of the following variables:
let a = 16; // Number type 
let b = "Johnson"; // String type

const x1 = {
  c: "John",  
  d: "Doe"
};    // Object type



// 5. Execute the function named myFunction.
function myFunction() {
  alert("Hello World!");
}
console.log("Hello World!")


// 6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
let person = {
  name: "john",
  age: 50
};
alert(person.name + " is " + person.age);


// 7. The <button> element should do something when someone clicks on it. Try to fix it!
<button onclick="alert('Thank you')">Click me</button>


// 8. Array Related Question 
const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length)

let Brand =  ["Volvo", "Jeep", "Mercedes"]; 
Brand [0] = "Ford";
console.log(Brand)


// 9. Math Related Problems
let x2 = Math.random();

let y2 = Math.max(10, 20);
console.log(y2)

let z1 = Math.sqrt(9);
console.log(z1)


// 10. comparison operator related problems! 
let x = 10;
let y = 5;
alert(x > y)

let  x3 = 10;
let y3 = (x3 < 18) ? "Too young" : "Old enough";
console.log(y3)




