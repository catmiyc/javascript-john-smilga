// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
*/

// object literal syntax,{}
// dot notation

//***********************
//object basics
//***********************
/*
const person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
};
console.log(person.name);
const name = person.name;
console.log(name);
// 改变属性
person.age = 60;
// 添加属性
person.city = "chicago";
// 删除属性
// delete person.siblings;
const siblings = delete person.siblings;
console.log(siblings);
console.log(person.siblings);
console.log(person);
*/

//***********************
//nested objects bracket notation
//***********************
// nested objects
// variable as property value
// dot notation vs bracket notation
/*
const age = 60;

const person = {
  name: "john",
  // age变量作为属性值
  age: age,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "coding",
      address: "123 street",
    },
  },
  // 对象的属性可以是字符串，所以命名比较灵活
  "random-value": "random",
};

console.log(person.job.title);
console.log(person.job.company.name);
// 访问对象不存在的属性，和属性值
// console.log(person.work);
// console.log(person.work.title);
// [] 的方式访问对象的属性，特别是字符串属性;
// 点. 不好访问字符串的属性
console.log(person["random-value"]);
console.log(person["age"]);
console.log(person);
*/

//***********************
// this
//***********************
/*
const john = {
  firstName: "john",
  lastName: "anderson",
  fullName: function () {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};
const bob = {
  firstName: "bob",
  lastName: "sanders",
  fullName: function () {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName();
bob.fullName();
*/
/*
// console.log(this);
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

function showThis() {
  console.log(this);
}

btn1.addEventListener("click", showThis);
btn2.addEventListener("click", showThis);
btn2.addEventListener("click", function () {
  showThis();
});
*/

//***********************
// factory function and constructor function
//***********************
/*
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
}

// constructor function

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  };
}

const john = new Person("john", "anderson");
john.fullName();
const bob = new Person("bob", "apple");
bob.fullName();
*/

//***********************
// prototype inheritance
//***********************
/*
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.bank = "AAA";
  // this.deposite = function (amount) {
  //   this.balance += amount;
  //   console.log(`hello ${this.name},your balance is ${this.balance}`);
  // };
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

Account.prototype.bank = "UUU";
Account.prototype.deposite = function (amount) {
  this.balance += amount;
  console.log(`hello ${this.name},your balance is ${this.balance}`);
};
console.log(john);
console.log(Account.prototype);

console.log(john.bank);
john.deposite(300);
bob.deposite(300);

console.log({});
console.log([]);
*/

//***********************
// ES6 class
//***********************
/*
class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "AAA";
  deposit(amount) {
    this.balance += amount;
    console.log(`hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account("john", 0);
console.log(john);
john.deposit(200);
*/

//***********************
// call
//***********************
/*
const john = {
  name: "john",
  age: "23",
  greet: function () {
    console.log(this);
    console.log(`hello, i'm ${this.name} and i'm ${this.age}`);
  },
};

const susan = {
  name: "susan",
  age: "21",
};

function greet() {
  console.log(this);
  console.log(`hello, i'm ${this.name} and i'm ${this.age}`);
}

greet.call(john);
greet.call(susan);
greet.call({ name: "peter", age: 20 });

john.greet.call(susan);
*/

//***********************
// apply
//***********************
/*
const john = {
  name: "john",
  age: "23",
};

const susan = {
  name: "susan",
  age: "21",
};

function greet(city, country) {
  console.log(this);
  console.log(
    `hello, i'm ${this.name} and i'm ${this.age} and i live in ${city}, ${country}`
  );
}

greet.call(john, "new york", "us");
greet.call(susan, "new york", "us");
greet.call({ name: "peter", age: 20 }, "new york", "us");

greet.apply(john, ["new york", "us"]);
greet.apply(susan, ["new york", "us"]);
greet.apply({ name: "peter", age: 20 }, ["new york", "us"]);
*/
//***********************
// bind
//***********************
/*
const john = {
  name: "john",
  age: "23",
};

const susan = {
  name: "susan",
  age: "21",
};

function greet(city, country) {
  console.log(this);
  console.log(
    `hello, i'm ${this.name} and i'm ${this.age} and i live in ${city}, ${country}`
  );
}

// assign, call it later
const susanGreet = greet.bind(susan, "toronto", "ca");
susanGreet();
*/

// examples

const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector(".increment");
// call,apply是瞬间有效，刷新只执行一次就结束了，所以这里只能用bind
// btn.addEventListener("click", counter.increment.call(counter));
// btn.addEventListener("click", counter.increment.bind(counter));
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
