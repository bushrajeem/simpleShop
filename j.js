let cartcount = 0;
let totalprice = 0;
let cartitem = [];
let product = [
  {
    name: "phone",
    image: "./image/phone.jfif",
    price: 3,
    description: "eilon masked phone",
  },
  {
    name: "laptop",
    image: "./image/laptop.png",
    price: 4,
    description: "High-performanced laptop",
  },
  {
    name: "camera",
    image: "./image/camera.png",
    price: 5,
    description: "telescoped feature",
  },
  {
    name: "watch",
    image: "./image/smartwatch.png",
    price: 6,
    description: "smooth performanced",
  },
];
let sidebar = [];

let productDiv = document.getElementById("product");
let productshow = product
  .map((value, i) => {
    return `<div class = "card">
               <img src= "${value.image}" alt=" ">
               <div>${value.name}</div>
               <div>$${value.price}</div>
               <div>${value.description}</div>
               <button class= "cart-button" onclick="addtocart(${value.price},${i})">ADD TO CART</button>
            </div>`;
  })
  .join("");
if (productDiv) {
  productDiv.innerHTML = productshow;
}
console.log(productDiv);

let buttons = document.querySelectorAll("button");
console.log(buttons);

function updatecart() {
  const cartItemsContainer = document.querySelector("#sidebar .cartitems");

  if (sidebar.length === 0) {
    cartItemsContainer.innerHTML = "Your cart is empty";
  } else {
    cartItemsContainer.innerHTML = sidebar
      .map((value, i) => {
        return `
      <div class="cartitem">
        <img class="cartImage" src="${value.image}" alt="">
        <div>${value.name}</div>
        <div>$${value.price}</div>
        <div class="cartbutton">
          <button class="plus" onclick="increaseItem(${i})">+</button>
          <div>${value.quantity}</div>
          <button class="minus" onclick="decreaseItem(${i})">-</button>
        </div>
      </div>
    `;
      })
      .join("");
  }
}

function increaseItem(i) {
  sidebar[i].quantity++;
  totalprice += sidebar[i].price;
  document.getElementById("price").innerHTML = "$" + totalprice;
  updatecart();
}
function decreaseItem(i) {
  if (sidebar[i].quantity > 1) {
    sidebar[i].quantity--;
    totalprice -= sidebar[i].price;
  }
  document.getElementById("price").innerHTML = "$" + totalprice;
  updatecart();
}

const addtocart = (item, i) => {
  cartcount++;
  document.getElementById("count").textContent = cartcount;
  totalprice += item;
  document.getElementById("price").innerHTML = "$" + totalprice;

  buttons[i].textContent = "Added to cart";
  buttons[i].style.background = "white";
  buttons[i].disabled = true;

  sidebar.push({ ...product[i], quantity: 1 });
  updatecart();
};
