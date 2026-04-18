let btn = document.querySelector("button");
let error = document.querySelector(".errors");
let name = document.querySelector("#userName");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let pass1 = document.querySelector("#password1");
let check = document.querySelector("#checkbox");
btn.addEventListener("click", () => {
  if (name.value == "") {
    error.innerHTML = "please enter name!";
    error.style.color = "red";
    return;
  }
  error.innerHTML = " ";
  if (email.value == "") {
    error.innerHTML = "Please enter valid email";
    error.style.color = "red";
    return;
  }
  error.innerHTML = "";  
  if(pass.length != 8){
    error.innerHTML = "please the password mustbe a 8 characters";
  }
  error.innerHTML = ""
  if (pass.value == "" && pass1.value == "") {
    error.innerHTML = "please enter password!";
    return;
  } else if (pass.value !== pass1.value) {
    error.innerHTML = "";
    error.innerHTML = "please both the password are same!";
    return;
  } else {
    error.innerHTML = "";
    error.innerHTML = "Your form is submited successfullly!!";
    error.innerHTML = "";
  }
});
