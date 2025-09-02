
// #1
let score = "33abc"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1 ; false => 0


// #2
let IsLoggedIn = 1   //0, "", "sana"
let boolLog = Boolean(IsLoggedIn)
//console.log(boolLog);

// "" => false
// "sana" => true

// #3
let someNumber = 33
let stringNum = String(someNumber)
//console.log(stringNum);
//console.log(typeof stringNum);


// ********************** Operations **********************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

// adding strings
let str1 = "hello"
let str2 = " sana"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
/*addition has the first prority...if numbers are first, it will add and then merge, if string is first, it will merge everything 
irrespective if there are other numbers to add later */
//console.log((3 + 2) * 5 % 3)
/*
the above is normally used when you are preparing for an exam...upto that extent it is good. but if you are making a 
project or submitting this kind of code to a particular company then it will not be accepted because who want they 
their code to be messy or confusing if you just want the output...use paranthesis for getting the clear output.
*/

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
// here will study prefix and postfix
/*
 prefix => the value gets incrementd first
 postfix => the value will be used and then gets incremented
*/

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
















//node 03_conversionsAndOperation.js