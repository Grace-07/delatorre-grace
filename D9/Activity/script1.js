const displayPost = async () => {
  // Select the user container element
  const itemContainer = document.getElementById("item-container");

  try {
    // Fetch user data from the JSONPlaceholder API
    const response = await fetch("https://fakestoreapi.com/products");

    // Check if the response is not successful
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    // Extract JSON data from the response
    const data = await response.json();
    let html = "";

    data.forEach((item) => {
      // Generate HTML markup for each user
      html += `
          <div class="col-4 mb-4">
            <div class="card">
                <img src="${item.image}" class="card-img-top mx-auto" style="height: 20rem; width: 20rem" alt="...">
                <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <h6 class="card-subtitle mb-4 text-muted">$${item.price}</h6>
                      <p class="card-text three-line-text">${item.description}</p>
                </div>
            </div>
          </div>`;
    });

    itemContainer.innerHTML = html;
  } catch (error) {
    // Display an error message if fetching data fails
    itemContainer.innerHTML = "An error occurred while fetching data.";
    console.error(error);
  }
};

window.addEventListener("load", displayPost);
