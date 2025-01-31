let productContainer = document.querySelector(".productContainer");
let productId = 1525;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <div class="product_img">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="tshirt">
            </div>
            <div class="product_box">
                <h2>Product information</h2>
                <h3>Model name</h3>
                <p>${data.productdisplayname}</p>
                <h3>Season</h3>
                <p>${data.season}</p>
                <h3>Type</h3>
                <p>${data.articletype}</p>
                <h3>Nike</h3>
                <p>Nike, creating experiences for todays athlete</p>
            </div>
            <div class="kurv">
                <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
                <p>NIKE - T-shirts</p>
                <p>Choose a size <button>S</button></p>
                <button>Add to basket</button>

            </div>`;
  });
