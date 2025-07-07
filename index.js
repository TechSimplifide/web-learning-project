// generate a random color

    let randomColor = function () {
      const hex = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    let setIntervalId;

    const startChangingColor = function () {

      if(setIntervalId == null){
      setIntervalId = setInterval(changeBgColor, 2000);
}
      function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
      }
    };

    const stopChangingColor = function () {
      clearInterval(setIntervalId);
      setIntervalId = null;
    };

    document
      .querySelector("#start")
      .addEventListener("click", startChangingColor);

    document
      .querySelector("#stop")
      .addEventListener("click", stopChangingColor);
      

      let bga = true;
      document.querySelector("#bg").addEventListener("click", () => {
        if (bga == true){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        bga = false;
       } else {
         document.body.style.backgroundColor = "white";
         document.body.style.color = "black";
         bga = true;
       }
    });

