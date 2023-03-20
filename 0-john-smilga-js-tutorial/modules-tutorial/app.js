// global name space / hard to navigate

import { random, people } from "./utils/data.js";
import showPeople1 from "./utils/showPeople.js";
import getElement from "./utils/getElement.js";

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");
// const container1 = document.querySelector(".container1");
// console.log(container1); // null

const container = getElement(".container");
const container1 = getElement(".container1");
const btn = getElement(".btn");

btn.addEventListener("click", () => {
  container.innerHTML = showPeople1(people);
});
