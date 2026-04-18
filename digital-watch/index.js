const watch = document.querySelector(".watch");
      setInterval(() => {
        let current = new Date();
        watch.innerHTML = current.toLocaleTimeString();
      }, 1000);