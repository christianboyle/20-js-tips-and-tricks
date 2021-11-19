// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator

let x = 1;

x = (x++, x);

console.log(x); // 2

x = (2, 3);

console.log(x); // 3
