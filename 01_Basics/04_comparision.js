// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0);   false
// console.log(null == 0);  false
// console.log(null >= 0);  true
/*
the reason is that an equality check == and comparisions >, <, >=, <= work differently.
Comparisions convert null to a number, treating it as 0.
that's why null >= 0 is true and null > 0 is false.
and should always remenber that the output is not always predictible.
== has different syntax of working.  <=, >=  these have diff syntax of working in JS. 
*/

// console.log(undefined > 0);   false
// console.log(undefined == 0);  false
// console.log(undefined >= 0);

// console.log(undefined >= null);

// WE MOSTLY AVOID THESE KIND OF CONVERSIONS, SHOWN ABOVE.

//Strict check (===) => it checks the value stictly. which means not only values but also its datatypes.
console.log("2" === 2);
 








//node 04_comparision.js