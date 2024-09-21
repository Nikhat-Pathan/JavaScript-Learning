let score1 = 33
let score2 = "33"
let score3 ="33abc"
let score4 = null

console.log(typeof score1);
console.log(typeof(score2));

let valInt1 = Number(score3)
let valInt2 = Number(score4)
console.log(typeof valInt1);  //type is Number :  But value is NaN (not a Number)
console.log(typeof valInt2);   //type is number : value 0 

console.log(valInt1);
console.log(valInt2);

//for boolean conversion
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  //true

// for boolean conversion 
//if number is 1 then => true
//  0  =>  false

let s = ""
let booleanS = Boolean(s)
console.log(booleanS);  //false

let ss = "Nikki"
let boolSs = Boolean(ss)
console.log(boolSs);  //true


