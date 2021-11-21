// deep vs. shallow object cloning
//
// https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
  color: {
    original: 'red',
  },
};

// for deep cloning an object
var newObjDeep = JSON.parse(JSON.stringify(myCar));

// for shallow cloning an object
var newObjShallow = Object.assign({}, myCar);

let myNewCar = { color: { ...newObjDeep.color.original } }; // red
myNewCar.color.original = 'pink';

console.log(newObjShallow.color.original); // red
console.log(myNewCar.color.original); // pink
