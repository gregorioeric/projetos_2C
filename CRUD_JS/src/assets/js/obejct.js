/**
 * Objeto é representado por {}
 */

const obj = {
  nome: "Eric",
  email: "eric@eric.com",
  idade: 47,
};

// console.log(obj.nome);
// console.log(obj.email);
// console.log(obj.idade);

const user_name = "Eric";
const user_email = "eric@eric.com";

const user = {
  user_name,
  user_email,
};
user.user_name = "Gregorio";
// console.log(obj);
// console.log(user);

/**
 *  Criar um objeto de endereço
 */

const endereco = {
  rua: "Alameda",
  numero: 258,
  complemento: "",
  cep: "15478-000",
  bairro: "Jardim Alameda",
  cidade: "Santo André",
  estado: "SP",
};

// console.log(endereco.cidade);
// console.log(endereco.complemento);
// console.log(endereco.rua);

/**
 * Criar um objeto de produtos
 * nome do produto
 * descrição
 * preço
 * categoria
 */

// EXERCÍCIO 2 — Adicionando e removendo
//               propriedades

// Usando o objeto "carro" abaixo:
//   a) Adicione uma propriedade "cor"
//      com o valor "prata"
//   b) Adicione uma propriedade "ano"
//      com o valor 2022
//   c) Remova a propriedade "placa"
//   d) Exiba o objeto final no console

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  placa: "ABC-1234",
};

carro.cor = "prata";
console.log(carro);
