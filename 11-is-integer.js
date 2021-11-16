// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

let myNumber = 253;
let myNumberString = '253';

console.log(`${myNumber} is a number?`, Number.isInteger(myNumber)); // 253 is a number? true

console.log(`${myNumberString} is a number?`, Number.isInteger(myNumberString)); // 253 is a number? false
