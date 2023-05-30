let laptops = [
    {
     productImg: "https://i.postimg.cc/02YDbbVG/laptopm18-2.webp",
     name: "Alienware m18 Gaming Laptop",
     description: "The Best Experience for High-End Gaming.",
     price: "R75,000"
    },
    {
     productImg: "https://i.postimg.cc/ZqRp2t1v/laptopx17r2.jpg",
     name: "Alienware x17 R2 Gaming Laptop",
     description: "The Best Experience for High-End Gaming.",
     price: "R73,000"
    },
    {
     productImg: "https://i.postimg.cc/vmgtqxg6/laptopx16r1.jpg",
     name: "Alienware x16 Gaming Laptop",
     description: "The Best Experience for High-End Gaming.",
     price: "R71,000"
    }
 ];

let displaptops = document.querySelector("#laptops");
laptops.forEach((item) => {
  displaptops.innerHTML += `
      <div class="card col-3 bg-black text-white border-white border-2 mx-auto p-2 text-center">
      <img src="${item.productImg}">
      <h4 class="fs-4">${item.name}</h4>
      <div class="card-body">
      <p class="text-white fs-6">${item.description}</p>      
      <p class="text-white fs-6">${item.price}</p>
      <button type="button" class="productBtn btn btn-black text-white text-center border-white p-2 mt-2 border-3">Add to Cart</button>
      </div>
    </div>`;
});