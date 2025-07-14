document.querySelector("button").addEventListener("click", () => {
  async function fetchRandomPeopleProfile() {
    try {
      const response = await fetch(`https://randomuser.me/api/`);

      const data = await response.json();

      console.log(data.results);

      document.querySelector(".container").innerHTML = `

      <div class="picture">
            <img src="${data.results[0].picture.large}" alt="">
            </div>

            <div class="name">Name: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</div>

            <div class="age">Age: ${data.results[0].dob.age}</div>

            <div class="gender">Gender: ${data.results[0].gender}</div>

            <div class="phone">Phone: ${data.results[0].phone}</div>

            <div class="email">Email: ${data.results[0].email}</div>

            <div class="city">City: ${data.results[0].location.city}</div>

            <div class="state">State: ${data.results[0].location.state}</div>

            <div class="country">Country: ${data.results[0].location.country}</div>
    
            `;
    } catch (error) {
      console.log(error);
    }
  }

  fetchRandomPeopleProfile();
});
