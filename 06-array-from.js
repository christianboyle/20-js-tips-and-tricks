// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

let players = [
  { name: 'simple', age: 37 },
  { name: 'cadian', age: 49 },
  { name: 'bit', age: 67 },
  { name: 'elige', age: 79 },
  { name: 'karrigan', age: 88 },
  { name: 'olof', age: 97 },
];

let playersNames = Array.from(players, ({ name }) => name);

console.log(playersNames);

// [ 'simple', 'cadian', 'bit', 'elige', 'karrigan', 'olof' ]
