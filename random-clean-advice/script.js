let container = document.querySelector("#jokes-container");
let btn = document.querySelector("button");
let loader = document.querySelector(".loader")

btn.addEventListener('click',()=>{
     loader.style.display = "block";
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
    .then((response, reject) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        container.innerHTML = `
        <p id="joke">${data.slip.advice}</p>
        `;
        loader.style.display = "none";
    })
    .catch((error) => console.log(error));
})
