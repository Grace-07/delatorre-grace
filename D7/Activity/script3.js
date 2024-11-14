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

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-items");
let total = 0;

window.addEventListener("load", (event) => {
  function TotalDisplay() {
    const totalText = document.getElementById("total");
    totalText.textContent = `Total: $${total.toFixed(2)}`;
  }

  products.forEach((product) => {
    const productItem = document.createElement("li");

    const productSpan = document.createElement("span");
    productSpan.textContent = `${product.name} - Price: $${product.price} `;
    productItem.appendChild(productSpan);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    productItem.appendChild(addButton);

    productList.appendChild(productItem);

    TotalDisplay();

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
        const updatedQty = parseInt(selectedItem.textContent) + 1;

        selectedItem.textContent = updatedQty;
        total += product.price;
      } else {
        const cartItem = document.createElement("li");

        const cartSpan = document.createElement("span");
        cartSpan.textContent = `${product.name} - Price: $${product.price} x `;
        cartItem.appendChild(cartSpan);

        const qty = document.createElement("span");
        qty.textContent = 1;
        qty.setAttribute("id", "qty");
        cartItem.appendChild(qty);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        cartItem.appendChild(deleteButton);

        cartList.appendChild(cartItem);

        total += product.price;

        deleteButton.addEventListener("click", function () {
          const existingItems = getExistingCartItems(product.name);
          const selectedItemQty = existingItems[0].querySelector("#qty");
          const formattedQty = parseInt(selectedItemQty.textContent);

          if (formattedQty > 1) {
            total = total - formattedQty * product.price;
          } else {
            total -= product.price;
          }

          TotalDisplay();

          cartList.removeChild(cartItem);

          event.preventDefault();
        });
      }

      TotalDisplay();

      event.preventDefault();
    });
  });
});
