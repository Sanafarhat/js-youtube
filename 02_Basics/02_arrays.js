// one thing to know is array can store anything inside...like boolean, number, char, string, object and 
// array itself!

const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]
// marvel.push(dc)   jo push hai wo existing array me hi push karta hai
// console.log(marvel);
// console.log(marvel[3][1]);  not an ideal way

// const allHeros = marvel.concat(dc)  // concat humko return karta hai naya array so ek variable me store karna padega.
// console.log(allHeros);

// the above is okay. but not everyone use it.
// thats why we use SPREAD operator

// const all_new_heros = [...marvel,...dc]
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_array = another_array.flat(Infinity)
// console.log(real_array);

console.log(Array.isArray("SANA")) // -> this shows false because it's a string. to convert it into array
console.log(Array.from("SANA"))
console.log(Array.from({name : "sana"})) // intresting...it will only give an empty array unless until you want
// to change the key or value to become an array

let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1,s2,s3));    // returns a new array from a set of elements





