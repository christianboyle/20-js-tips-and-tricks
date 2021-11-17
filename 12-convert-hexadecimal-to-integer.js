// shortcut to convert hex to decimal is to prefix the string with 0x, so 'b' becomes '0xb'
//
// don't use with large values: https://www.danvk.org/wp/2012-01-20/accurate-hexadecimal-to-decimal-conversion-in-javascript/

console.log(0xb); // 11
console.log(0xd); // 13
console.log(0xff); // 255

// equivalent verbose examples

let hexStrB = 'b';
let numberB = parseInt(hexStrB, 16);
console.log(numberB); // 11

let hexStrD = 'd';
let numberD = parseInt(hexStrD, 16);
console.log(numberD); // 13

let hexStrFF = 'ff';
let numberFF = parseInt(hexStrFF, 16);
console.log(numberFF); // 255
