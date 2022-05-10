let container = document.querySelector(".cardContainer");
let state = { categories: [] };

fetch("../server/categories/index.get.json")
  .then((response) => response.json())
  .then((data) => {
    filteredArr = data.filter(function (item) {
      if (item.enabled == true) return item;
    });
    filteredArr?.map((el) => {
      console.log("el", el);
      const html = `<li class="card">
          <div class="banner-img-section"><img src=${el?.imageUrl} class="banner-img"/></div>
          <ul class="banner-info"> <h3>${el?.name}</h3><p>${el?.description}</p>
         <button id="myButton"  class="explore"  onclick="window.location='../pages/plp.html'">Explore</button> </ul>
        </li>`;
      container.insertAdjacentHTML("afterend", html);
    });
  })
  .catch((error) => console.log(error));

console.log("category", state.categories);
{
  /* <h3>Fruits &amp; Vegetables</h3><p>A variety of fresh fruits and vegetables.</p><button>Explore Fruits &amp; Vegetables</button></ul> */
}
