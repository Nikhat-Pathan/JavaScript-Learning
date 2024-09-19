const accountId = 144553
let accountEmail = "Nikhat@gamil.com"
var accountPassword = "12345"
accountCity = "Indore"
//not recommended to use
let accountState;
  
//accountId = 2        //Not allowed

console.log(accountId);
accountEmail = "NP@gmail.com"
accountPassword = "212121"
accountCity = "Gurugram"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/