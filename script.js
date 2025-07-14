let loader = document.querySelector(".loader");
let btn = document.querySelector("#btn");
let container = document.querySelector(".container");

btn.addEventListener("click", () => {
  let inputs = document.querySelector("#value").value.trim();
  if (inputs === "" || inputs != String) {
    let cancelSub = document.querySelector(".sub");
    loader.style.display = "none";
    container.style.padding = "0%";
    document.querySelector("#error").style.display = "inline-block";
    cancelSub.style.padding = "0.3rem";
    cancelSub.style.backgroundColor = "rgba(169, 177, 174, 0.87)";
    cancelSub.style.borderRadius = "0.5em";
    cancelSub.style.border = "0.1em solid rgb(200, 203, 202)";

    document.querySelector("#cancle").style.display = "inline-block";
    document.querySelector("#error").textContent = "⚠️City name cannot be empty! or number!";
    return;
  }
  loader.style.display = "block";
  container.style.padding = "3%";
async function fetchWeather() {
  try {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1e3320c56b894b389a091539251407&q=${inputs}&aqi=yes`)
  const data = await response.json();
         container.innerHTML = `
            <p class='time'>${data.location.localtime}</p>
            <div class='location'>
            <h3><img src='./map.png' alt='map icon'/>${data.location.name}</h3>
            <h4><img src='region.png'>${data.location.region}</h4>
            <p><img src='country.png'>${data.location.country}</p>
            </div>
            <div class='temprature'>
            <p>${data.current.temp_c}<img src='celsius.png'></p>
            <p>${data.current.temp_f}<img src='fahrenheit.png'></p>
            </div>
            <div class='humidity'>
            <p>${data.current.humidity}<img src='humidity.png'></p>
            </div>
            <div class='condition'>
           <p><img src="${data.current.condition.icon}"/></p>
            <p>${data.current.condition.text}</p>
            </div>
            `;
      loader.style.display = "none";
      inputs.innerText = " ";
  

  } catch (error) {
    console.log(error);
    
  }
}
fetchWeather()
});

let btn1 = document.querySelector("#clear");
btn1.addEventListener("click", () => {
  document.querySelector("#value").value = "";

  container.innerHTML = " ";
  container.style.padding = "0px";
});

document.querySelector("#cancle").addEventListener("click", () => {
  document.querySelector("#error").style.display = "none";
  document.querySelector("#cancle").style.display = "none";
  let subCancle = document.querySelector(".sub");
  subCancle.style.backgroundColor = "none";
  subCancle.style.borderRadius = "none";
  subCancle.style.border = "none";
  subCancle.style.padding = "0rem";
});
