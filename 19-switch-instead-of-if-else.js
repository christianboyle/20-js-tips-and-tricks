// The prevailing theory on using if-else versus switch is based on the number of conditions being tested: the larger the number of conditions, the more inclined you are to use a switch instead of if-else. This typically comes down to which code is easier to read.
//
// https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html#if-else_versus_switch

function getGroup(age) {
  var group = '';

  switch (true) {
    case isNaN(age):
      group = 'not an age';
      break;
    case age >= 70:
      group = 'Very Old';
      break;
    case age >= 40:
      group = 'Old';
      break;
    case age >= 18:
      group = 'Adult';
      break;
    default:
      group = 'Young';
      break;
  }

  return group;
}

console.log(getGroup(18)); // Adult
