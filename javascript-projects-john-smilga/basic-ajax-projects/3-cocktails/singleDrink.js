import fetchDrinks from "./src/fetchDrinks.js";
import displaySingleDrink from "./src/displaySingleDrink.js";

const presentSingleDrink = async () => {
  console.log("hello");
  // fetch
  const id = localStorage.getItem("drink");
  console.log(id);
  if (!id) {
    window.location.replace("index.html");
  } else {
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(drink);
    // display
    displaySingleDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentSingleDrink);
