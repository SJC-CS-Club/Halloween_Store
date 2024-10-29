// Select the cart and clear cart button elements
const cartItemsContainer = document.getElementById("cart-items");
const clearCartButton = document.getElementById("clear-cart");

// Cart object to store items and their quantities
let cart = {};

// Event listener for each product card to add items to the cart
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", () => {
    const itemName = card.querySelector("h3").innerText;
    addToCart(itemName);
  });
});

// Function to add an item to the cart
function addToCart(itemName) {
  if (cart[itemName]) {
    cart[itemName] += 1;
  } else {
    cart[itemName] = 1;
  }
  updateCart();
}

// Function to update the cart display
function updateCart() {
  cartItemsContainer.innerHTML = ""; // Clear previous cart items

  for (const [itemName, quantity] of Object.entries(cart)) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerText = `${itemName} (x${quantity})`;

    // Remove button for each item
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => removeFromCart(itemName));

    cartItem.appendChild(removeButton);
    cartItemsContainer.appendChild(cartItem);
  }
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
  if (cart[itemName] > 1) {
    cart[itemName] -= 1;
  } else {
    delete cart[itemName];
  }
  updateCart();
}

// Clear cart button functionality
clearCartButton.addEventListener("click", () => {
  cart = {}; // Reset cart object
  updateCart();
});
