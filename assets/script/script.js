let products = [
  {
    productImg: "https://i.postimg.cc/6qgD35pG/laptop2.webp",
    name: "Alienware Laptops",
    description: "Alienware's Elite Lineup of laptops.",
  },
  {
   productImg: "https://i.postimg.cc/4xJCcXM9/monitor.jpg",
    name: "Alienware Monitors",
    description: "The Best Gaming Monitors in the Industry.",
  },
  {
    productImg: "https://i.postimg.cc/jSvxvPgx/desktop2.webp",
    name: "Alienware Desktops",
    description: "The Best Experience for High-End Gaming.",
  },
];

let productMonitor = [
   {
    productImg: "https://i.postimg.cc/jSvxvPgx/desktop2.webp",
    name: "Alienware Desktops",
    description: "The Best Experience for High-End Gaming.",
    price: ""
   },
   {
    productImg: "https://i.postimg.cc/jSvxvPgx/desktop2.webp",
    name: "Alienware Desktops",
    description: "The Best Experience for High-End Gaming.",
    price: ""
   },
   {
    productImg: "https://i.postimg.cc/jSvxvPgx/desktop2.webp",
    name: "Alienware Desktops",
    description: "The Best Experience for High-End Gaming.",
    price: ""
   }
];

let productDesktop = [
   {
    productImg: "https://i.postimg.cc/jSvxvPgx/desktop2.webp",
    name: "Alienware Desktops",
    description: "The Best Experience for High-End Gaming.",
    price: "",
   },
   {
    productImg: "https://i.postimg.cc/jSvxvPgx/desktop2.webp",
    name: "Alienware Desktops",
    description: "The Best Experience for High-End Gaming.",
    price: "",
   },
   {
    productImg: "https://i.postimg.cc/jSvxvPgx/desktop2.webp",
    name: "Alienware Desktops",
    description: "The Best Experience for High-End Gaming.",
    price: "",
   }
];


let dispProducts = document.querySelector("#featuredProducts");
products.forEach((data) => {
  dispProducts.innerHTML += `
      <div class="card col-3 bg-black text-white border-white border-2 mx-auto p-2 text-center">
      <img src="${data.productImg}">
      <h4 class="display-6">${data.name}</h4>
      <div class="card-body">
      <p class="text-white fs-4">${data.description}</p>
      <button type="button" class="productBtn btn btn-black text-white text-center border-white p-2 mt-2 border-3">Shop More</button>
      </div>
    </div>`;
});
