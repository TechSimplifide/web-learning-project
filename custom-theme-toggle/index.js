let toggle = document.querySelector(".toggle");
       let togg = true;
      toggle.addEventListener("click", () => {
        if (togg == true) {
          document.body.style.backgroundColor = "#010";
          toggle.style = "background-color: #fff; border:1.4px solid";
          document.querySelector(".toggle-container").style = 'border:0.1rem solid #fff'
          togg = false;
          } else {
          document.body.style.backgroundColor = "#fff";
          document.querySelector(".toggle-container").style = 'border:0.1rem solid '
          toggle.style = "background-color: rgb(75, 68, 68); border:1.4px solid #fff";
          togg = true;
        }
      });