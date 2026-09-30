/**
 * O que são funções?
 * São blocos de código que
 * executam uma tarefa específica.
 *
 */

function minhaPrimeiraFuncao() {
  const nome = "Eric Gregorio";

  return nome;
}

const getValor = minhaPrimeiraFuncao();

// console.log(getValor);

function calcular(valor1, valor2) {
  return valor1 + valor2;
}

const resultado = calcular(5, 4);
console.log(resultado);

function cliente(nome, idade, telefone) {
  const mostrarDadosCliente = `
    Nome do cliente: ${nome},
    Idade: ${idade},
    Telefone: ${telefone};
  `;
  return mostrarDadosCliente;
}

const dadosCliente = cliente("Eric Gregorio", 47, 11922336655);
console.log(dadosCliente);

// arrow function
// () => {}

const arrowFunction = (nome, idade, callback) => {
  return `Nome é ${nome}, idade é ${idade}`;
};

const resultado2 = arrowFunction("Eric", 44, () => {});
