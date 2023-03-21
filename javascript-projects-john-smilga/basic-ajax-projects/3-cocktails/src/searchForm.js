import getElement from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = getElement(".search-form");
const input = getElement('[name="drink"]');
console.log(input);
form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  console.log(value);
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
