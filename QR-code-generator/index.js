let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
document.querySelector("button").addEventListener("click", () => {
  if (qrText.value === "") {
    alert("Please enter some data or content!");
    return;
  }
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=+${qrText.value}`;
  setTimeout(() => {
    qrText.value = "";
  }, 4000);
});
