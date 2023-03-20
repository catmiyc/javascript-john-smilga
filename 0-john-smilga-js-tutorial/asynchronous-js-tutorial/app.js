//***********************
// Javascript is single threaded, synchronous language.
//***********************
/*
console.log(`i'm first`);
console.log(`i'm second`);
console.log(`i'm third`);

console.log(`i'm first`);
boilingWater();
console.log(`i'm third`);

function boilingWater() {
  console.log('boiling...');
  for (let i = 0; i < 1000; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}
*/
//***********************
// Asynchoronous js
//***********************
/*
boilingWater(0);
console.log(`chop carrots`);

function boilingWater(time) {
  console.log("boiling...");
  setTimeout(() => {
    console.log("done");
  }, time);
}
*/

// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// 煮水10分钟，切萝卜，把萝卜放到水里煮5分钟
// 煮水的时候可以切萝卜
//***********************
// callback hell
//***********************
/*
boilingWater();
console.log(`chop carrots`);

function boilingWater() {
  console.log("boiling...");
  setTimeout(() => {
    console.log("water done");
    console.log("add carrots");
    setTimeout(() => {
      console.log("carrots done");
      console.log("add onion");
      setTimeout(() => {
        console.log("onion done");
      }, 2000);
    }, 2000);
    console.log("chop onion");
  }, 5000);
}
*/

//***********************
// callback hell dom example
//***********************
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";
    setTimeout(() => {
      heading2.style.color = "green";
      setTimeout(() => {
        heading3.style.color = "blue";
      }, 1000);
    }, 1000);
  }, 1000);
});
