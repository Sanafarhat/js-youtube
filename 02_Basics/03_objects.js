// there are two ways to declare an object
// literal and constructor 
// singleton - when you make something with constructor the sigleton becomes an object means a single object. and 
//cannot make with any other like literals, singleton nai banta.


//Object.create // isi ke andar singleton banta hai(we will talk about this later)

// object literals 
// objects contain key : value pairs. even the key in bts are tracked as string so when printing we write inside ""
const jsUser = {
    name: "sana",
    "full name" : "Syed sana farhat", // now there is no chance to print using '.' so thats why use[""]
    age: 20,
    location: "japan"
}
console.log(jsUser.age);
console.log(jsUser["age"]);


