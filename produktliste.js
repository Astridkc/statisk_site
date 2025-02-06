const myCategory = new URLSearchParams(window.location.search).get("category");
let productListContainer = document.querySelector(".product_list_container");
const overskrift = document.querySelector("h1");
overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

// let markup = "";

function showList(products) {
  console.log(products);

  const markup = products

    .map(
      (product) => `
         <article class="box">

          
                <img class="${product.soldout && "sold_out"}" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
                <div class="discount ${product.discount && "isOnSale"}">
                <p>${product.discount}%</p>
                </div>
            
                
                <h2>${product.productdisplayname}</h2>
                <h3>${product.brandname}</h3>

                <div class="pris">
                    <p class="${product.discount && "foerpris"}">${product.price},-</p>
                    <p class="tilbudHidden ${product.discount && "isOnSale"}">Now <span>${Math.floor(product.price - (product.price * product.discount) / 100)}<span/>,-</p>
                </div>

                <div class="sold_out_text ${product.soldout && "isSoldOut"}">
                    <p>Sold out</p>
                </div>

                <a href="produkt.html?id=${product.id}">Read more</a>
            </article>`
    )
    .join("");
  console.log(markup);
  productListContainer.innerHTML = markup;
}
