// another option is String(), which seems to be preferred:
//
// https://medium.com/dailyjs/5-ways-to-convert-a-value-to-string-in-javascript-6b334b2fc778

let num = 711;
let newNum = num.toString();

console.log(typeof num); // number
console.log(typeof newNum); // string

let val = 311;
let newVal = 311 + '';

console.log(typeof val); // number
console.log(typeof val); // string
