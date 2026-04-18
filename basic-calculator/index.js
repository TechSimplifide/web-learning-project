let inputField = document.querySelector("#result");

      let body = document.querySelector("body");

      let btn = document.querySelector(".btny");

      let img = document.querySelector("#day");

      let contain = document.querySelector("#container");

      let bg = true;

      btn.addEventListener("click", () => {
        if (bg == true) {
          body.style.backgroundColor = "black";
          img.src = "day-mode.png";
          contain.style.backgroundColor = "rgb(112, 110, 110)";
          bg = false;
        } else {
          document.body.style.backgroundColor = "white";
          img.src = "night-mode.png";
          contain.style.backgroundColor = "#151515aa";
          bg = true;
        }
      });

      let buttons = document.querySelectorAll(".btn");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          let value = button.value;
          if (value === "C") {
            inputField.value = "";
            return;
          } else if (value === "=") {
            let expression = inputField.value;
            inputField.value = eval(expression);
            return;
          } else if (value === "x") {
            inputField.value = inputField.value.slice(0, -1);
            return;
          }
          inputField.value += value;
        });
      });
