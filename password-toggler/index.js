let password = document.querySelector("#password");
let img = document.querySelector("#img");
img.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    img.src = "visual.png";
  } else {
    password.type = "password";
    img.src = "hidden.png";
  }
};
