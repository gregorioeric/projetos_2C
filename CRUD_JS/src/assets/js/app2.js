import productsCRUD from "./CRUD2.js";
const closeModalX = document.querySelector("#close-modal-x");
const btnCancel = document.querySelector("#btn-cancel");
const modal = document.querySelector("#modal");
const btnCadastrar = document.querySelector("#btn-cadastro");
const btnRegisterProduct = document.querySelector("#register-product");
const inputName = document.querySelector("#name");
const inputPrice = document.querySelector("#price");
const inputDescription = document.querySelector("#description");

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

  const getProducts = productsCRUD.showProducts();

  const product = {
    product_id:
      getProducts.length === 0
        ? getProducts.length + 1
        : getProducts[getProducts.length - 1].product_id + 1,
    product_name: inputName.value,
    product_price: inputPrice.value,
    product_description: inputDescription.value,
  };

  const result = productsCRUD.insert(product);

  inputName.value = "";
  inputPrice.value = "";
  inputDescription.value = "";
});
