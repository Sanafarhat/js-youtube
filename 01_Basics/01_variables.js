const accountId = 14321
let accountEmail = "sana@gmail.com"  //block level scope
var accountPassword = "12345"  // not used alot  (var) Global level
let accountState;  // undefined
accountCity = "Jaipur"
// there is also a posibility that the variable can be declared like this...but its safe not to use like this
// accountId = 2; // not allowed because const keyword is already written
accountEmail = "san@far.com"
accountPassword = "67890"
accountCity = "Bangaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope 
so from now on use only const and let
*/

