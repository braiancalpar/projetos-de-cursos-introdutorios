// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const classes = ["Druida", "Bardo", "Guerreiro", "Clérigo", "Ladino"];
for (let classe of classes) {
  console.log(classe);
}

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function imprimeIndiceEElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice ${i}, elemento ${arr[i]}`);
  }
}
imprimeIndiceEElemento(classes);
// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const numerosInteiros = [1, 2, 3, 4, 5];
function somaInteiros(array) {
  let soma = 0;
  for (let element of array) {
    soma += element;
  }
  return soma;
}
console.log(somaInteiros(numerosInteiros));
// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
const inteiros = [-2, -5, 27, 9, 14, 19];
function menorEMaior(arra) {
  let menor = arra[0];
  let maior = arra[0];
  for (let i = 0; i < arra.length; i++) {
    if (arra[i] > maior) {
      maior = arra[i];
    }
    if (arra[i] < menor) {
      menor = arra[i];
    }
  }
  return `O menor número é ${menor} e o maior número é ${maior}`;
}
console.log(menorEMaior(inteiros));
console.log(menorEMaior(numerosInteiros));
// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let par = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    par.push(numeros[i]);
  }
}
console.log(`A lista de números pares que estão no array numeros é ${par}`);

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const notas = [7, 6, 9, 10, 9];
let somaDasNotas = 0;

for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`a média das notas é ${media}`);
