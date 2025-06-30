let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === 0 && weight === 0) {
    results.innerHTML = "Please enter a valid height and weight";
  } else if (height === "" || height < 0 || isNaN(height || height == 0)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight) || weight == 0) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // formula to calculate BMI
    // shoew the result

    if (bmi < 18.6) {
      results.style.color = "yellow"; // \n for line break
      setTimeout(() => {
        results.innerText = `${bmi} You are Under Weight`;
      }, 1000);

      document.querySelector("#height").value=''
      document.querySelector("#weight").value=''
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.style.color = "green";

      results.innerText = `${bmi} You are Normal Range`;
      document.querySelector("#height").value=''
      document.querySelector("#weight").value=''
    } else if (bmi > 24.9) {
      results.style.color = "red";

      results.innerText = `${bmi}  You are Overweigh`;
      document.querySelector("#height").value=''
      document.querySelector("#weight").value=''
    }
  }
});
