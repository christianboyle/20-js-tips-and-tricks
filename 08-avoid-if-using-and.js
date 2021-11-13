let isPrime = true;

const startProgramming = () => {
  console.log('Started Programming!');
};

// using an if statement is the standard approach, but more verbose

if (isPrime) {
  startProgramming();
}

// better option is to use logical AND(&&) operator to avoid the if statement
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

isPrime && startProgramming();
