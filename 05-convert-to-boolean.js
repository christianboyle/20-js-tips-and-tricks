// Using Double Not-Operator (!!) For Boolean Type Casting
//
// https://www.bennadel.com/blog/1784-using-double-not-operator-for-boolean-type-casting.htm
//
// https://www.bennadel.com/blog/3858-the-double-bang-operator-and-a-misunderstanding-of-how-javascript-handles-truthy-falsy-values.htm

console.log(!!''); // false
console.log(!!' '); // true
console.log(!!0); // false
console.log(!!1); // true
