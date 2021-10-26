const riders = ['Kerley', 'Begin', 'Roche'];

// legacy
//
for (let i = 0; i < riders.length; i++) {
  const rider = riders[i];
  console.log(rider);
}

// modern
//
// ES6 for...of loop: https://www.javascripttutorial.net/es6/javascript-for-of/
for (let rider of riders) {
  console.log(rider);
}
