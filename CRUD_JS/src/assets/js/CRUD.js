/**
 * C - Create
 * R - Read
 * U - Update
 * D - Delete
 */

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
    const getProducts = produtosDB;
    return getProducts;
  },
  deleteProduct: (id) => {
    return id;
  },
};

export default productsCRUD;
