getPhone = () => {
  const phone = document.getElementById("search-area").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
  //   console.log(url);
  document.getElementById("spinner").style.display = "block";
  fetch(url)
    .then((res) => res.json())
    .then((result) => setPhone(result.data));
};

const setPhone = (phones) => {
  // console.log(phones);
  if (phones.length > 0) {
    // console.log(phones);
    document.getElementById("spinner").style.display = "none";
    document.getElementById("phones-container").textContent = "";
    document.getElementById("details-container").textContent = "";
    document.getElementById("error").textContent = "";
    document.getElementById("search-area").value = "";
    console.log(phones);
    const firstTweentyPhones = phones.slice(0, 20);

    for (const phone of firstTweentyPhones) {
      // console.log(phone);
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
  } else {
    // console.log(phones);
    document.getElementById("phones-container").textContent = "";
    document.getElementById("details-container").textContent = "";
    document.getElementById("error").textContent = "";
    document.getElementById("search-area").value = "";
    document.getElementById("spinner").style.display = "none";
    const error = document.getElementById("error");
    const p = document.createElement("p");
    p.innerText = "No result found";
    error.appendChild(p);
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
  detailsContainer.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class='row gx-4'>
  <div class="col-md-5">
  <img src="${phone.image}"  class="w-100  py-2" alt="${phone.phone_name}"/>
  </div>
  <div class="col-md-7">
  <div class="w-50 mx-auto py-4">
  <h5><span class='fw-bold'> Name </span>: ${phone.name}</h5>
  <p><span class='fw-bold'> Category </span>: ${phone.brand}</p>
   ${
     phone.releaseDate
       ? `<p> <span class='fw-bold'> Releasedate </span>: ${phone.releaseDate}<p/>`
       : " <span class='fw-bold'> Releasedate </span>: No data found"
   }
   <p><span class='fw-bold'> Storage </span> : ${phone.mainFeatures.storage}</p>
   <p><span class='fw-bold'> Displaysize </span> : ${
     phone.mainFeatures.displaySize
   }</p>
   <p><span class='fw-bold'> Chipset </span>: ${phone.mainFeatures.chipSet}</p>
   <p><span class='fw-bold'> Memory </span>: ${phone.mainFeatures.memory}</p>

   <p><span class='fw-bold'>  Sensors </span>: ${phone.mainFeatures.sensors}</p>
   <p><span class='fw-bold'> Wlan </span>: ${phone.others.WLAN}</p>
   <p><span class='fw-bold'> Bluetooth </span>:${phone.others.Bluetooth}</p>
   <p><span class='fw-bold'> GPS </span>: ${phone.others.GPS}</p>
   <p><span class='fw-bold'> NFC </span>: ${phone.others.NFC}</p>
   <p><span class='fw-bold'> Radio </span>: ${phone.others.Radio}</p>
   <p><span class='fw-bold'> USB </span>: ${phone.others.USB}</p>

   </div 
  </div>
  </div>

  `;
  detailsContainer.appendChild(div);
};
