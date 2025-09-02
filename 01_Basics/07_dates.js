// Dates

let myDate = new Date() // lhs = instance , rhs = object
// console.log(myDate); // very confusing 
// console.log(myDate.toString());  // readable
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2025, 5, 27)
let myCreatedDate = new Date("2025-06-27")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now                      

// console.log(myTimeStamp());
// console.log(myCreatedDate.getTime());
// if you want to convert the output which is in milliseconds into seconds
// console.log(Math.floor(Date.now()/1000));


// if you want to know only specific things
let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());






