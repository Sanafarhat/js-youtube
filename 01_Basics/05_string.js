const name = "sana"
const repoCount = 50

//console.log(name + repoCount + " value"); This syntax is outdated, nobody likes to use this in mondern days

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //this syntax is readible 
// the faayda to use the backticks because here it comes 'STRING INTERPOLATION' 
// which means you make placeholders, whatever variable is inside that you can directly inject the value

//another way to define string
const gameName = new String("Avengers")  // u can run it in console to see the values
// // we can access the key value pair now, which means, key is the position and value is the related to the postiton
// console.log(gameName[0]);
// console.log(gameName.__proto__);  


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // we can use negative values in slice
console.log(anotherString);

const newStr1 = "   sana    "
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://www.whoareyou20%imsana.com"
console.log(url.replace('20%','-'));   // search value, replace value











