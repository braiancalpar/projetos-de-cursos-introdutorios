// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
function concatenaArrays(...arrays) {
  return [].concat(...arrays);
}

const array1 = [11, 12, 13, 14];
const array2 = [21, 22, 23, 24];
const array3 = [31, 32, 33, 34];
const array4 = [41, 42, 43, 44];
const arraysConcatenados = concatenaArrays(array1, array2, array3, array4);
console.log(arraysConcatenados);

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const valores = [13, 12, 15, 14, 16, 19];
const somaValores = valores.reduce(
  (acumulador, valor) => acumulador + valor,
  0,
);
console.log(somaValores);

// 3 - Considere duas listas de cores:

const coresLista1 = ["Vermelho", "Verde", "Azul", "Amarelo", "Vermelho"];
const coresLista2 = ["Laranja", "Verde", "Roxo", "Azul"];
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
//const todasAsCores = [...new Set(coresLista1.concat(coresLista2))];
const todasAsCores = [...new Set([...coresLista1, ...coresLista2])];
console.log(todasAsCores);

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
function filtrarNumerosPares(array) {
  return array.filter((num) => num % 2 === 0);
}
console.log(filtrarNumerosPares(valores));

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
const arr = [3, 6, 9, 4, 12, 2, 7, 13, 15, 14, 16, 19];
function filtrarMultiplosDeTres(array) {
  return array.filter((num) => num % 3 === 0 && num > 5);
}
console.log(filtrarMultiplosDeTres(arr));

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
function somaElementos(arr) {
  return arr.reduce((acumulador, valor) => acumulador + valor, 0);
}
console.log(somaElementos(arr));
