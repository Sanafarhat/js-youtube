/*
The datatypes are divided into 2 types
1) Prmitive(call by value)           2) Non-Primitive(call by reference)
- string                                 - Arrays
- number                                 - objects
- boolean                                - functions
- null
- undefined
- symbol
- BigInt     
the diff between these two is that it tells how the data is stored in a memory
and how the daat is accessed in a memory.



JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.
For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean

*/

// primitive examples
const score = 100
const scoreValue = 100.3

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id == anotherId);


//non primitive examples

const heros = ["harry","harmoine","ron"];    //arrays

let myObj = {      //anything inside curly braces
    name: "sana",   
    age: 20,
}

const myFunction = function(){       // U can treat functions as a variable in JS
    //console.log("hello world");
    
}


// **************************************************************************************************
// STACKS AND HEAP
// Stack (primitive) ,                                          Heap (Non-primitive)
// whenever you take a new                                    when u take a new value in heap u will get the reference
//value in stack you will only get the copy of it.
let myYoutubename = "SANFARFAB"
let anotherName = myYoutubename
anotherName = "SanaFarhatFabulous"

console.log(myYoutubename);

console.log(anotherName);

// heap related
let userOne = {
    email: "user@google.com",     // both stored in Heap
    upi: "jjfei"
}

let userTwo = userOne

userTwo.email = "sana@google.com"    // . use to access

console.log(userOne.email);
console.log(userTwo.email);


