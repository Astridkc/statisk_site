let productListContainer = document.querySelector(".product_list_container");
let listContainer = document.querySelector(".product_list_container");

const myCategory = new URLSearchParams(window.location.search).get("category");
console.log("myCategory", myCategory);

const overskrift = document.querySelector("h1");
overskrift.innerHTML = myCategory;

if (myCategory != null) {
  fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
    .then((response) => response.json())
    .then((data) => showList(data));
} else {
  fetch(`https://kea-alt-del.dk/t7/api/products`)
    .then((response) => response.json())
    .then((data) => showList(data));
}

let markup = "";

function showList(products) {
  console.log(products);
  products
    .map((product) => {
      markup += `
 



    <div class="box">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tshirt"></img>
      <h2>${product.productdisplayname}</h2>
      <h2>T-shirts - Nike</h2>
      <div class="pris ${product.discount && "discount"} ${product.soldout && "sold_out"}>
        <h3>DkK 895</h3>
      </div>
      <div>
        <a href="produkt.html?id=${product}">Read More</a>
      </div>
    </div>`;
    })
    .join("");
  console.log(markup);
  productListContainer.innerHTML = markup;
}
