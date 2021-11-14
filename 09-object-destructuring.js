// JS Destructuring in 100 Seconds: https://www.youtube.com/watch?v=UgEaJBz3bjY

// without destructuring

const user = {
  name: 'Christian',
  age: 39,
  gender: 'M',
  member: false,
};

// const name = user.name;
// const age = user.age;
// const gender = user.gender;
// const member = user.member;

// console.log(name, age, gender, member); // Christian 39 M false

// with destructuring

const { name, age, gender, member } = user;

console.log(name); // Christian
console.log(age); // 39
console.log(gender); // M
console.log(member); // false
