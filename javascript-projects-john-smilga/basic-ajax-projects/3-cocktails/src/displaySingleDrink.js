import { hideLoading } from "./toggleLoading.js";
import getElement from "./getElement.js";

const img = getElement(".drink-img");
const drinkName = getElement(".drink-name");
const drinkDesc = getElement(".drink-desc");
const ingredents = getElement(".drink-ingredients");
const displaySingleDrink = ({ drinks }) => {
  hideLoading();
  const drink = drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  console.log(list);
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  drinkDesc.textContent = desc;
  ingredents.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square></i> ${item}</li>`;
    })
    .join("");
};
export default displaySingleDrink;
