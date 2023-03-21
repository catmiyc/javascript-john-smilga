import getElement from "./getElement.js";
const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (user) => {
  img.src = user.image;
  value.textContent = user.name;
  title.textContent = "My name is";
  removeActive(btns);
  btns[0].classList.add("active");
  //
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`;
      value.textContent = user[label];
      removeActive(btns);
      btn.classList.add("active");
    });
  });
};

function removeActive(items) {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

export default displayUser;
