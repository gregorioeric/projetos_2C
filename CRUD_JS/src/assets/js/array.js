/**
 * Array ou lista pode armazenar varios
 * tipos de dados.
 * array é representado pelos []
 */
// posições do array  0 , 1,  2, 3,   4
const arrayNumeros = [25, 36, 8, 145, 2.5];
const arrayStrings = ["Uva", "Maça", "Pera"];
const arrayObjects = [
  { nome: "eric", email: "eric@eric.com" },
  { nome: "gregorio", email: "gregorio@eric.com" },
];

// acessar os dados do array.
// console.log(arrayNumeros[3]);
// console.log(arrayStrings[2]);
// console.log(arrayObjects[1]);
// console.log(arrayObjects[1].nome);

const frutas = ["kiwi", "banana", "pera", "uva", "morango"];

// console.log(frutas[frutas.length - 1]);
// console.log(frutas.length);

const arrObj = [
  {
    fruta: "morango",
    preco: 24.55,
    quantidade: 3,
  },
  {
    fruta: "banana",
    preco: 5.99,
    quantidade: 1,
  },
  {
    fruta: "kiwi",
    preco: 12.66,
    quantidade: 2,
  },
  {
    fruta: "pera",
    preco: 18.99,
    quantidade: 4,
  },
];

// console.log(arrObj[0]);
// console.log(arrObj[1]);
// console.log(arrObj[2]);
// console.log(arrObj[3]);

//                     4
for (let i = 0; i < arrObj.length; i++) {
  console.log(arrObj[i].fruta);
}

// metodo map

const mostrarFrutas = arrObj.map((fruta) => {
  console.log(fruta.fruta);
});
