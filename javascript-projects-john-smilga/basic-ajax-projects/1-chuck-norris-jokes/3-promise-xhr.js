const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", () => {
  getData(URL)
    .then((response) => {
      disPlay(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
          state: xhr.readyState,
        });
      }
    };

    xhr.send();
  });
}

function disPlay(data) {
  img.classList.add("shake-img");
  const { value: joke } = JSON.parse(data);
  content.textContent = joke;
  const randomTime = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, randomTime);
}
