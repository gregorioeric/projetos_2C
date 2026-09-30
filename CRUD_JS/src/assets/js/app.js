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

  console.log(inputName.value);
});
