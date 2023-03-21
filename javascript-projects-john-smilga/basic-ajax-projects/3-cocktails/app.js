import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b";

// presentDrinks(URL);

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
  console.log("finish");
});
