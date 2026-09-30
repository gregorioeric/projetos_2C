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
console.log(arrayNumeros[3]);
console.log(arrayStrings[2]);
console.log(arrayObjects[1]);
console.log(arrayObjects[1].nome);
