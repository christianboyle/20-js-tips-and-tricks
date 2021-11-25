// snippet useful when you have to generate fake data for testing purposes, such as a salary between min and max.

const max = 200_000;
const min = 100_000;

let salary = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(salary);
