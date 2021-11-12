// ES6 Set object type can be used with spread operator to create a new array with only unique values
//
// https://www.javascripttutorial.net/es6/javascript-set/

const array = [1, 1, 2, 3, 5, 5, 1];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // [1, 2, 3, 5]
