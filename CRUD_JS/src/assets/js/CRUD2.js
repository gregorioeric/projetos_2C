/**
 * C - CREATE ou Criar
 * R - READ ou Ler
 * U - UPDATE ou Atualizar
 * D - DELETE - Deletar
 */

// Ternaria é uma estrutura de
// condição de uma unica linha
// condição ? "" : ""
const produtosDB = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

const productsCRUD = {
  insert: (productData) => {
    produtosDB.push(productData);
    localStorage.setItem("products", JSON.stringify(produtosDB));
    return;
  },
  showProducts: () => {
    return produtosDB;
  },
};

export default productsCRUD;
