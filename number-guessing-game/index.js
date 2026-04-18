let score = document.querySelector(".score");
let result = document.querySelector(".result");
let btn = document.querySelector(".btn");
let randomNumber = Math.floor(Math.random() * 10) + 1;
let SCORE = 0;

let reactImg = document.querySelector("#reactionImg");
btn.addEventListener("click", () => {
  let subCon = document.querySelector(".sub-container");
  subCon.style.cssText = `
   border: 2px solid #000;
   background-color: rgb(241, 239, 235);
    border-radius: 0.4rem;
    padding: 0.4rem;
  `;
  let inputVal = Number(document.querySelector("#input-field").value);

  if (isNaN(inputVal) || inputVal <= 0 || inputVal > 10) {
    document.querySelector("#cancelBtn").style.display = "block";
    document.querySelector(".error").innerText = "please enter a valid number";

    document.querySelector("#invalidSound").play();
    document.querySelector("#input-field").value = "";
    return;
  }

  if (inputVal === randomNumber) {
    result.innerHTML = `Nice, You guessed it!`;
    reactImg.src = "congratulationsImg.png";
    reactImg.style.display = "block";
    document.querySelector("#correctSound").play();
    result.style =
      "color: green; text-align: center; font-size: larger; font-weight: 600";
    score.innerHTML = `Score:${(SCORE += 1)}`;
    document.querySelector("#input-field").value = "";
    randomNumber = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      reactImg.style.display = "none";
      result.innerHTML = "";
    }, 6800);
  } else if (inputVal > randomNumber) {
    result.innerHTML = `Too high`;
    reactImg.src = "sad.png";
    result.style.textAlign = "center";
    reactImg.style.display = "block";
    document.querySelector("#wrongSound").play();
    result.style =
      "color: red; text-align: center; font-size: larger; font-weight: 600";
    document.querySelector("#input-field").value = "";
    setTimeout(() => {
      reactImg.style.display = "none";
      result.innerHTML = "";
    }, 3000);
    result.value = "";
  } else if (inputVal < randomNumber) {
    result.innerHTML = `Too low`;
    reactImg.src = "sad.png";
    result.style.textAlign = "center";
    reactImg.style.display = "block";
    document.querySelector("#wrongSound").play();
    result.style =
      "color: red; text-align: center; font-size: larger; font-weight: 600";
    document.querySelector("#input-field").value = "";
    setTimeout(() => {
      reactImg.style.display = "none";
      result.innerHTML = "";
    }, 3000);
  }
});

document.querySelector("#cancelBtn").addEventListener("click", () => {
  document.querySelector(".error").innerText = "";
  document.querySelector("#cancelBtn").style.display = "none";
  document.querySelector("#cutSound").play();
  document.querySelector(".sub-container").removeAttribute("style"); // it removes all inline css
  document.querySelector("#input-field").value = "";
});
