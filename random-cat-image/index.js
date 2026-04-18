let container = document.querySelector(".container");
let loader = document.querySelector(".loader");
let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  loader.style.display = "block";

  const url = "https://api.thecatapi.com/v1/images/search";

  fetch(url)
    .then((resolve) => {
      return resolve.json();
    })
    .then((data) => {
      container.innerHTML = `
            <div class="cats">
              <img src="${data[0].url}"/>
              </div>
              `;
      loader.style.display = "none";
    })
    .catch((error) => console.log(error));
});
