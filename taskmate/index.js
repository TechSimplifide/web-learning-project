//add event on button to add tasks
let btn = document.querySelector("button").addEventListener("click", () => {
  let text = document.querySelector("#textfield").value;

  // to show an error message
  if (document.querySelector("#textfield").value === "") {
    document.querySelector(
      ".error-waper"
    ).style = `padding: 0.2rem; border: 0.1em solid white; `;
    let error = document.querySelector(".error");
    error.innerHTML = `Error: please enter some task!!`;
    document.querySelector("#cancle").style.display = "block";
  } else {
    //creating li to show tasks
    let li = document.createElement("li");
    let hr = document.createElement("hr");
    hr.setAttribute("class", "hr-seprater");
    li.setAttribute("class", "vertual-task-li");
    let ul = document.querySelector("#Add");
    ul.appendChild(li);
    li.innerText = text;

    document.querySelector("#textfield").value = "";

    // create edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.setAttribute("class", "edit-button");
    li.appendChild(editBtn);

    // working of edit button
    editBtn.addEventListener("click", () => {
      if (editBtn.innerText === "Edit") {
        let currentVal = li.firstChild.textContent;
        let inputVal = document.createElement("input");
        inputVal.type = "text";
        inputVal.value = currentVal;
        inputVal.setAttribute("id", "vertualText");

        li.innerText = "";
        li.appendChild(inputVal);
        li.appendChild(editBtn);
        li.appendChild(deletebtn);
        li.append(time);

        editBtn.innerText = "Save";
      } else {
        let UpdatedTask = li.querySelector("input").value;
        li.innerText = UpdatedTask;
        li.appendChild(editBtn);
        editBtn.innerText = "Edit";
        li.appendChild(deletebtn);
        li.append(time);
      }
    });

    // create a delete button
    let deletebtn = document.createElement("button");
    deletebtn.setAttribute("class", "delete-button");
    deletebtn.innerText = "Delete";
    li.appendChild(deletebtn);

    // working of delete button
    deletebtn.addEventListener("click", () => {
      li.innerText = "";
      editBtn.remove();
      deletebtn.remove();
      hr.remove();
    });

    // time
    let curr = new Date();
    let time = document.createElement("div");
    time.setAttribute("class", "date");
    time.innerHTML = `${curr.getHours()}:${curr.getMinutes()}`;

    li.append(time);
    ul.appendChild(hr);
  }
});

document.querySelector("#cancle").addEventListener("click", () => {
  document.querySelector(".error-waper").removeAttribute("style");
  document.querySelector(".error").innerHTML = "";
  document.querySelector("#cancle").style.display = "none";
});
