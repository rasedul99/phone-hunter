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
      <h6 class="card-title">${phone.brand}</h6>
      
      <a href="#" class="btn btn-primary" onclick="getDetails('${phone.slug}')">Details</a>
    </div>
  </div>
    `;
    phonesContainer.appendChild(div);
  }
};

getDetails = (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => showDetails(result.data));
};

const showDetails = (phone) => {
  console.log(phone);

  const detailsContainer = document.getElementById("details-container");
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='row gx-4'>
  <div class="col-md-5">
  <img src="${phone.image}"  class="w-100  py-2" alt="${phone.phone_name}"/>
  </div>
  <div class="col-md-7">
  <div class="w-50 mx-auto py-4">
  <h5>${phone.name}</h5>
  <p>Category:${phone.brand}</p>
   ${phone.releaseDate ? `<p>${phone.releaseDate}<p/>` : "No data found"}
   <p>${phone.mainFeatures.storage}</p>
   <p>${phone.mainFeatures.displaySize}</p>
   <p>${phone.mainFeatures.chipSet}</p>
   <p>${phone.mainFeatures.memory}</p>
   <p>${phone.mainFeatures.sensors}</p>
   <p>${phone.others.WLAN}</p>
   <p>${phone.others.Bluetooth}</p>
   <p>${phone.others.GPS}</p>
   <p>${phone.others.NFC}</p>
   <p>${phone.others.Radio}</p>
   <p>${phone.others.USB}</p>

   </div 
  </div>
  </div>

  `;
  detailsContainer.appendChild(div);
};
sensor = () => {
  console.log("hello");
};
