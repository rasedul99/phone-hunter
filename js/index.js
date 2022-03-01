getPhone = () => {
  const phone = document.getElementById("search-area").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((result) => setPhone(result.data));
};

const setPhone = (phones) => {
  console.log(phones);
  for (const phone of phones) {
    console.log(phone);
    const phonesContainer = document.getElementById("phones-container");
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
    <div class="card my-3">
    <img src="${phone.image}"  class="card-img-top w-50 mx-auto py-2" alt="${phone.phone_name}"/>
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      
      <a href="#" class="btn btn-primary">Details</a>
    </div>
  </div>
    `;
    phonesContainer.appendChild(div);
  }
};
