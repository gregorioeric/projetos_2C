import productsCRUD from "./CRUD.js";
const closeModalX = document.querySelector("#close-modal-x");
const btnCancel = document.querySelector("#btn-cancel");
const modal = document.querySelector("#modal");
const btnCadastrar = document.querySelector("#btn-cadastro");
const btnRegisterProduct = document.querySelector("#register-product");
const inputName = document.querySelector("#name");
const inputPrice = document.querySelector("#price");
const inputDescription = document.querySelector("#description");

const allProducts = document.querySelector("#all-products");

btnCadastrar.addEventListener("click", (e) => {
  modal.classList.remove("hide");
  modal.classList.add("show");
});

closeModalX.addEventListener("click", (e) => {
  modal.classList.remove("show");
  modal.classList.add("hide");
});

btnCancel.addEventListener("click", (e) => {
  modal.classList.remove("show");
  modal.classList.add("hide");
});

btnRegisterProduct.addEventListener("click", (e) => {
  e.preventDefault();
  const getAllProducts = productsCRUD.showProducts();

  // O que é uma ternaria, é uma estrutura de
  // condição de uma unica linha.
  // exemplo: condition ? "" : ""
  const produto = {
    product_id:
      getAllProducts.length === 0
        ? getAllProducts.length + 1
        : getAllProducts[getAllProducts.length - 1].product_id + 1,
    product_name: inputName.value,
    product_price: inputPrice.value,
    product_description: inputDescription.value,
  };

  // push insere itens dentro de um array ou lista
  // produtosDB.push(produto);
  const result = productsCRUD.insert(produto);

  showProducts();
  inputName.value = "";
  inputPrice.value = "";
  inputDescription.value = "";
});

const showProducts = () => {
  const getAllProducts = productsCRUD.showProducts();

  allProducts.innerHTML = "";

  const listProducts = getAllProducts
    .map((product) => {
      return `
      <div class="card-wrapper" data-id="${product.product_id}">
        <div class="card-content">
          <div class="card-info">
            <h3>${product.product_name}</h3>
            <span>${product.product_price}</span>
            <p>${product.product_description}</p>
          </div>
        </div>
        <div class="btn-group">
          <button class="view">👁️ View</button>
          <button class="edit">📝 Edit</button>
          <button class="delete" id="btn-delete">❌ Delete</button>
        </div>
      </div>
    `;
    })
    .join("");

  return (allProducts.innerHTML = listProducts);
};

showProducts();

allProducts.addEventListener("click", (e) => {
  e.preventDefault();
  const getId = e.target.parentElement.parentElement.getAttribute("data-id");

  const result = productsCRUD.deleteProduct(getId);
  console.log(result);
});
