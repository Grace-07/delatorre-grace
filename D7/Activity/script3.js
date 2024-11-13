const products = [
  {
    name: "Product 1",
    price: 10,
  },
  {
    name: "Product 2",
    price: 15,
  },
  {
    name: "Product 3",
    price: 20,
  },
];

const cart = [];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-items");

window.addEventListener("load", (event) => {
  products.forEach((product) => {
    const productItem = document.createElement("li");

    const productSpan = document.createElement("span");
    productSpan.textContent = `${product.name} Price: $${product.price} `;
    productItem.appendChild(productSpan);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    productItem.appendChild(addButton);

    productList.appendChild(productItem);

    addButton.addEventListener("click", (event) => {
      function getExistingCartItems(searchText) {
        const elements = document.querySelectorAll("#cart-items li");

        const matchingElements = Array.from(elements).filter((element) =>
          element.textContent.includes(searchText)
        );

        return matchingElements;
      }

      const existingItems = getExistingCartItems(product.name);

      if (existingItems.length > 0) {
        const selectedItem = existingItems[0].querySelector("#qty");

        selectedItem.textContent = parseInt(selectedItem.textContent) + 1;
      } else {
        const cartItem = document.createElement("li");

        const cartSpan = document.createElement("span");
        cartSpan.textContent = `${product.name} Price: $${product.price} `;
        cartItem.appendChild(cartSpan);

        const qty = document.createElement("span");
        qty.textContent = 1;
        qty.setAttribute("id", "qty");
        cartItem.appendChild(qty);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        cartItem.appendChild(deleteButton);

        cartList.appendChild(cartItem);

        deleteButton.addEventListener("click", function () {
          cartList.removeChild(cartItem);
        });
      }

      event.preventDefault();
    });
  });
});
