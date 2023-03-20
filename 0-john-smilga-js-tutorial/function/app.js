// IIFE Immediately-Invoked Function Expression
// older approach - new Modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.

// global namespace, extra steps

/*
const num1 = 30;
const num2 = 50;
// const num1 = 70;

function add() {
  console.log(`the result is : ${num1 + num2}`);
}
add();

(function () {
  console.log("hello");
})();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result iss : ${num1 + num2}`);
})();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

// 带参数的IIFF
(function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
})(30, 50);
// return / assign to varible
const result = (function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
  // return num3 + num4;
})(300, 50);
console.log(result);
*/

// hoisting
/*
// console.log(firstName);
console.log(random);
const firstName = "John";
let lastName = "Jordan";
var random = "random";
console.log(firstName);

display();
console.log(display);

function display() {
  console.log("hello");
}
*/

// closure
/*
function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello there secret is : ${privateVar}`);
  }
  return inner;
}

outer()();

const value = outer();
console.log(value);
value();
*/

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`hey, ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    console.log(`hey, ${name}, your balance is ${balance}`);
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`hey,${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    console.log(`hey, ${name}, your balance is ${balance}`);
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = new newAccount("john", 300);
const bob = new newAccount("bob", 1000);

john.showBalance();
john.deposit(200);
john.withdraw(100);
