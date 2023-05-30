let laptops = [
    {
     productImg: "https://i.postimg.cc/02YDbbVG/laptopm18-2.webp",
     name: "Alienware m18 Gaming Laptop",
     description: "The Highest Range Laptops.",
     price: "R75,000"
    },
    {
     productImg: "https://i.postimg.cc/ZqRp2t1v/laptopx17r2.jpg",
     name: "Alienware x17 R2 Gaming Laptop",
     description: "The Middle of Highest Range Laptops.",
     price: "R73,000"
    },
    {
     productImg: "https://i.postimg.cc/vmgtqxg6/laptopx16r1.jpg",
     name: "Alienware x16 Gaming Laptop",
     description: "The Lowest of the Highest Range Laptops.",
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

let monitors = [
    {
     productImg: "https://i.postimg.cc/4xJCcXM9/monitor.jpg",
     name: "Alienware 34 Curved QD-OLED Gaming Monitor - AW3423DW",
     description: "The Highest Range Monitor",
     price: "R33,500"
    },
    {
     productImg: "https://i.postimg.cc/sxYGX8w3/monitor3.webp",
     name: "Alienware 500HZ Gaming Monitor - AW2524H",
     description: "The Best gaming monitor out there",
     price: "R14,800"
    },
    {
     productImg: "https://i.postimg.cc/rFNp35DR/monitor3.jpg",
     name: "Alienware 27 Gaming Monitor - AW2723DF",
     description: "The Best Average Monitor you will find",
     price: "R12,000"
    }
 ];

let dispMonitor = document.querySelector("#monitors");
monitors.forEach((item) => {
  dispMonitor.innerHTML += `
      <div class="card col-3 bg-black text-white border-white border-2 mx-auto p-2 text-center">
      <img src="${item.productImg}">
      <h4 class="fs-4">${item.name}</h4>
      <div class="card-body">
      <p class="text-white fs-6">${item.description}</p>      
      <p class="text-white fs-4">${item.price}</p>
      <button type="button" class="productBtn btn btn-black text-white text-center border-white p-2 mt-2 border-3">Add to Cart</button>
      </div>
    </div>`;
});

let desktops = [
    {
     productImg: "https://i.postimg.cc/9fQ9VW9Y/desktop1.jpg",
     name: "Alienware Aurora R13 Gaming Desktop",
     description: "The Lowest of the Highest Range of Intel Gaming Desktops you can find",
     price: "R40,000",
    },
    {
     productImg: "https://i.postimg.cc/SRr1XSZN/desktop2.jpg",
     name: "Alienware Aurora R14 Ryzen Edition Gaming Desktop",
     description: "The Absolute Beast of Ryzen Gaming Available to man",
     price: "R53,500",
    },
    {
     productImg: "https://i.postimg.cc/0jCx8Kht/desktop3.webp",
     name: "Alienware Aurora R15 Gaming Desktop",
     description: "The Highest Range of Intel Gaming Desktops",
     price: "R57,000",
    }
 ];
 
 let dispDesktop = document.querySelector("#desktops");
desktops.forEach((item) => {
  dispDesktop.innerHTML += `
      <div class="card col-3 bg-black text-white border-white border-2 mx-auto p-2 text-center">
      <img src="${item.productImg}">
      <h4 class="fs-4">${item.name}</h4>
      <div class="card-body">
      <p class="text-white fs-6">${item.description}</p>      
      <p class="text-white fs-4">${item.price}</p>
      <button type="button" class="productBtn btn btn-black text-white text-center border-white p-2 mt-2 border-3">Add to Cart</button>
      </div>
    </div>`;
});
