let productId = new URLSearchParams(window.location.search).get("id");
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
       

          <div class="product_img">
                <img class="${data.soldout && "sold_out"}" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${data.productdisplayname}">
                <span class="discount_2 ${data.discount && "isOnSale"}">-${data.discount}%</span>

                <span class="sold_out_2 ${data.soldout && "isSoldOut"}">SOLD OUT</span>
                 </div>
           

            <div>
                <h2>Product information</h2>
                <h2>Model name</h2>
                <p>${data.productdisplayname}</p> 
                <h2>Color</h2>
                <p>${data.colour1}</p> 

                <h2>Price</h2>
                <p class="${!data.discount && "hide"}">Now ${Math.round(data.price * (1 - data.discount / 100))},-</p>
                <p class="${data.discount && "foerpris"}" >${data.price},-</p>


                <h2>Inventory number</h2>
                <p>${data.id}</p> 
                <h2>${data.brandname}</h2> 
                <p>${data.brandbio}</p>
            </div>

            <div class="kurv">
                <h1>${data.productdisplayname}</h1> 
                <p>${data.brandname}</p>

                <div class="size-selector">
                    <label for="size" class="size-label">Choose a size</label>
                    <select id="size" class="size-select">
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>

                <button class="style-button">Add to basket</button>
            </div>
       `;
  });
