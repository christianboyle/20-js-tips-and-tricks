// swap two variables with es6 destructuring
//
// https://github.com/wesbos/es6-articles/blob/master/20%20-%20Swapping%20Variables%20with%20Destructuring.md

let name = 'Christian';
let fruit = 'Grape';

[fruit, name] = [name, fruit];

console.log(name, fruit); // Grape Christian
