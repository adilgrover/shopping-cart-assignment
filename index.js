let container = document.querySelector(".cardContainer");
let state = { categories: [] };

fetch("../server/categories/index.get.json")
  .then((response) => response.json())
  .then((data) => {
    data?.map((el) => {
      console.log("el", el);
      const html = `<li class="card">
          <div><img src=${el?.imageUrl} /></div>
         <div> <div class="description">${el?.description}</div>
         <button id="myButton"  class="explore"  onclick="window.location='../pages/plp.html'">Explore</button> </div>
        </li>`;
      container.insertAdjacentHTML("afterend", html);
    });
  })
  .catch((error) => console.log(error));

console.log("category", state.categories);
