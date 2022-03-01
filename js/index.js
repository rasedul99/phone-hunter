getPhone = () => {
  const phone = document.getElementById("search-area").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
