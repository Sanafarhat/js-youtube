// Array
// Array is an object. It enables storing a collection of multiple items under a single variable name.
// In JS arrays are not primitives but are array objects
// -> JS arrays are resizable and can contain a mix of datatypes. they are 0 indexed
// JS arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes,
//but must be accessed using non negative integers
// JS array-copy operations create shallow copies.
// Shallow copy - a copy whose properties share the same references
// Deep copy -    "" ""   ""    ""  do not share the same references

const MyArr = [0, 1, 2, 3, 4, 5]

// another way to decalre array
const MyArr2 = new Array(1, 2, 3, 4)

// console.log(MyArr[0]);

// Array Methods

// MyArr.push(6)
// MyArr.push(7)
// MyArr.pop()

// MyArr.unshift(9)
// MyArr.shift()

// console.log(MyArr.includes(9)); // false
// console.log(MyArr.indexOf(9));  // -> -1 
// console.log(MyArr.indexOf(3));  // index value = 3


const newArr = MyArr.join()  //Adds all elements of an array into a string


// console.log(MyArr);  // -> [0, 1, 2, 3, 4, 5]
// console.log(newArr); // -> 0,1,2,3,4,5
// console.log(typeof newArr);

// Slice, Splice

console.log("A ", MyArr);
const myn1 = MyArr.slice(1, 3)  // returns a copy of a section of an array. Last range not included
console.log(myn1);
console.log("B ", MyArr);


const myn2 = MyArr.splice(1, 3)   // returns a copy of a section of an array. Last range included

console.log(myn2);
console.log("C ",MyArr);

// this is the important difference b/w splice and slice . we should know which array operation manipulates
//the original array and which one does not. here the slice doesn't disturb the original array but splice does.







