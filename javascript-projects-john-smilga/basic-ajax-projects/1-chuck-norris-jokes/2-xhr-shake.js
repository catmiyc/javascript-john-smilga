const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      img.classList.add("shake-img");
      const { value: joke } = JSON.parse(xhr.responseText);
      content.textContent = joke;
      const randomTime = Math.random() * 1000;
      setTimeout(() => {
        img.classList.remove("shake-img");
      }, randomTime);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };

  xhr.send();
}
