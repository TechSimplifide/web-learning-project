document.querySelector(".btn").addEventListener("click", () => {
  const results = document.querySelector(".results-container");
  const inputVal = document.querySelector(".input").value.trim();

  if (!inputVal) {
    results.innerHTML = `Please enter URL!`;
    return;
  }

  (async () => {
    try {
      results.innerHTML = `Sorting ${inputVal}...`;
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${inputVal}`
      );
      const data = await response.json();
      console.log(data);
      if (data.errormessage) {
        results.innerHTML = `
          <a targate="_blank">${data.errormessage}</a>
          `;
      } else {
        results.innerHTML = `
            <a>${data.shorturl}</a>
            `;
      }
    } catch (error) {
      document.querySelector(".results-container").innerText = error;
    }
  })();
});

document.querySelector("#urlCopy").addEventListener("click", () => {
  async function copyToClipboard() {
    const text = document.querySelector(".results-container").innerText;

    try {
      await navigator.clipboard.writeText(text);
      document.querySelector(".copyStatus").innerText = "Copied!";
    } catch (err) {
      document.querySelector(".copyStatus").innerText = "Failed to copy.";
    }

    setTimeout(() => {
      document.querySelector(".copyStatus").innerText = "";
    }, 2000);
  }

  copyToClipboard();
});
