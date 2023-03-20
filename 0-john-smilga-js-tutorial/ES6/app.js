//***********************
// var, let , const
//***********************
// define, update, redifine
// const cannot mutate primitive type
/*
// define
var number = 100;
// console.log(number);
// update
number = 200;
// console.log(number);
// redifine
var number = 'orange';
// console.log(number);

let amount = 100;
// console.log(amount);
amount = 200;
// console.log(amount);
// let amount = 'orange';

const total = 100;
// console.log(total);
// total = 200;
const person = { name: 'bob' };
person.name = 'john';
console.log(person.name);
*/

// function scope; block scope
/*
var total = 1000;

if (true) {
  var total = 'orange';
  console.log('hello there');
}

console.log(total);
*/
//***********************
// template
//***********************
/*
const person = {
  name: 'kyle',
  job: 'developer',
  hobbies: ['surfing', 'baking', 'bowling'],
};

const result = document.getElementById('result');

result.innerHTML = `
<h2> ${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbies
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join('')}</ul>
`;
*/
//***********************
// tagged template literals
//***********************
/*
const author = 'John Smilga';
const statement = 'Statement';

const quoto = highlight`here is the ${statement} by ${author}`;
console.log(quoto);

const result = document.getElementById('result');
result.innerHTML = quoto;

function highlight(text, ...vars) {
  const finalText = text.map((item, index) => {
    return `${item} <strong class='blue'>${vars[index] || ''}</strong>`;
  });
  return finalText.join('');
}
*/
//***********************
// 箭头函数
//***********************
/*
function sayHi() {
  console.log('hello');
}
sayHi();

const hello = function (name) {
  console.log(`hello ${name}`);
};
hello('john');

function triple(value1, value2) {
  return value1 * value2 * 3;
}

const sayHiArrow = () => console.log('arrow hello');

const helloArrow = (name) => console.log(`hello ${name}`);

const tripleArrow = (value1, value2) => {
  const result = value1 * value2 * 3;
  return result;
};
console.log(tripleArrow(1, 2));

// 返回对象
const object = () => ({ name: 'john', age: 23 });
const person = object();
console.log(person);

// 回调函数是箭头函数
const numbers = [1, 2, 3, 4, 5, 6, 7];

const bigReg = numbers.filter(function (number) {
  if (number > 2) return number;
});

const bigArrow = numbers.filter((number) => number > 2);

console.log(bigReg);
console.log(bigArrow);
*/

//***********************
// 箭头函数 对象和 this
//***********************
/*
const bob = {
  firstName: 'bob',
  lastName: 'smith',

  sayName: function () {
    console.log(this);
    // const self = this;
    setTimeout(() => {
      console.log(this);
      console.log(`hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

const anna = {
  firstName: 'anna',
  lastName: 'sandres',
  sayName: () => {
    console.log(this);
    console.log(`hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
// anna.sayName();
*/
/*
const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   setTimeout(() => {
//     console.log(this);
//     this.style.color = 'black';
//   }, 2000);
// });
btn.addEventListener('click', function () {
  setTimeout(function () {
    console.log(this);
    this.style.color = 'black';
  }, 2000);
});
// btn.addEventListener('click', () => {
//   console.log(this);
//   this.style.color = 'black';
// });
*/

//***********************
// 数组
//***********************
// 数组赋值
/*
const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'perter', 'bob', 'anna', 'kelly'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

// const [john, peter, bob] = friends;
// console.log(john, peter, bob);
const [john, , bob, , kelly] = friends;
console.log(john, bob, kelly);
*/
// 交换数组
/*
let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;
[second, first] = [first, second];
console.log(first, second);
*/
//***********************
// 对象
//***********************
/*
const bob = {
  first: 'bob',
  last: 'sandres',
  city: 'chicagl',
  siblings: {
    sister: 'jane',
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName, lastName, sister);

const {
  first: firstName,
  last: lastName,
  city,
  siblings: { sister },
} = bob;
console.log(firstName, lastName, city, sister);
*/
//***********************
// 函数参数拆解
//***********************
/*
const bob = {
  first: 'bob',
  last: 'sandres',
  city: 'chicagl',
  siblings: {
    sister: 'jane',
  },
};

//function print(person)
function print({ first, last, city }) {
  // console.log(person.first);
  // const { first, last, city } = person;
  console.log(first, last, city);
}

print(bob);
*/

//***********************
// 字符串方法
//***********************
/*
const person = 'Peter Smith';
const employee = '12345-EMP-PETER-SMITH';
const manager = '12345-MAN-JOHN-DOE';
// startsWith()
// 起始值， 起始位置（索引号， 默认为0）；注意大小写
// console.log(person.startsWith('Pe'));
// console.log(person.startsWith('pe'));
// console.log(person.startsWith('Sm'));
// console.log(person.startsWith('Sm', 6));

// endsWith()
// console.log(employee.endsWith('SMITH'));
// console.log(employee.endsWith('sMITH'));
// console.log(employee.endsWith('EMP'));
// console.log(employee.endsWith('EMP', 9));

// includes()
// console.log(person.includes('Pe'));
// console.log(person.includes('pe'));

//repeat
const multiplePerson = (person, amount = 5) => person.repeat(amount);
const people = multiplePerson(person, 6);
console.log(people);
*/

//***********************
// for of
//***********************
/*
const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'John Smith Pepper III';
let shortName = '';

for (const letter of longName) {
  if (letter === ' ') {
    continue;
  } else {
    shortName += letter;
  }
}
// console.log(shortName);
for (const fruit of fruits) {
  if (fruit === 'banana') {
    break;
  }
  console.log(fruit);
}
*/
//***********************
// 展开操作符 ...
//***********************
/*
const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anaa'];
const bestFriend = 'arnold';
const friends = [boys, girls, bestFriend];
console.log(friends);
const friendsSpread = [...boys, ...girls, bestFriend];

console.log(friendsSpread);
// reference
// const newFriedns = friendsSpread;
const newFriedns = [...friendsSpread];
newFriedns[0] = '123';
console.log(newFriedns);
console.log(friendsSpread);
*/
//***********************
// 对象展开
/*
const person = { name: 'john', job: 'developer' };
const newPerson = { ...person };
// const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(newPerson);
console.log(person);
*/
//***********************
// DOM NodeList 的展开
/*
const headings = document.querySelectorAll('h1');
const result = document.querySelector('#result');

console.log(headings);
// console.log(headings.map((item) => console.log(item)));
const text = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join(' ');
console.log(text);

// result.innerHTML = text;

const text1 = [];
for (item of headings) {
  text1.push(item);
}
// console.log(text1);

console.log(['1', '2', 'a'].join(' '));
*/
//***********************
// 函数的参数的展开
/*
const numbers = [23, 45, 67, 1, 234];
// console.log(Math.max(numbers));
console.log(Math.max(...numbers));

const john = ['john', 'smilga'];

const sayHi = (firstName, lastName) => {
  console.log(`hello, ${firstName} ${lastName}`);
};
sayHi(...john);
*/
//***********************
// rest 操作符
//***********************
/*
// arrays
const fruit = ['apple', 'orange', 'lemon'];
const [first, ...rest] = fruit;
console.log(first, rest);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...restP } = person;
// const { ...restP, job  } = person;
console.log(job, restP);

// function parameters
const getAverage = (...scores) => {
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  const average = total / scores.length;
  console.log(`${name}:  total score is ${total}, average score is ${average}`);
};

getAverage(78, 89);
getAverage(88, 79, 96, 79);
*/
//***********************
// 数组的 of/from 方法
//***********************
/*
// Array.of
const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);
const friends = Array.of('john', 2, true);
// console.log(friends);
// Array.from
const udemy = 'udemy';
console.log(Array.from(udemy));

function countTotal() {
  // console.log(arguments);
  let total = Array.from(arguments).reduce((total, curr) => (total += curr), 0);
  console.log(total);
}
countTotal(45, 65, 23, 100);
*/
// DOM NodeList
const p = document.querySelectorAll('p');
const result = document.querySelector('#result');
const second = document.querySelector('#second');

console.log(p);
let newText = Array.from(p);
console.log(newText);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');
console.log(newText);
result.innerHTML = newText;

const text = Array.from(p, (item) => {
  return `<span>${item.textContent}</span>`;
}).join(' ');
//
console.log(text);
second.innerHTML = text;
