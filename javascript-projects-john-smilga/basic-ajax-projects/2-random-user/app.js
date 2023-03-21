import getElement from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
import displayUser from "./utils/displayUser.js";

const btn = getElement(".btn");

const showUser = async () => {
  // get user from api
  const userInfo = await getUser();
  // display user
  displayUser(userInfo);
};

window.addEventListener("DOMContentLoaded", showUser);

btn.addEventListener("click", showUser);
