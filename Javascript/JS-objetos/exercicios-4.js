const dados = require("./dados.json");
// console.log(dados);
// const chaves = Object.keys(dados);
// console.log(chaves);
// console.log('Produtos:', dados.produtos);
// console.log('Usuários:', dados.usuarios);

const produto = {
  id: 6,
  nome: "Armadura de placas",
  preco: 625.99,
  raridade: "incomum",
};

// Converte o objeto produto para uma string
const stringJsonProduto = JSON.stringify(produto);

// Imprime no console a string do objeto produto
// console.log("String do Produto:");
// console.log(stringJsonProduto);

const animais = require("./animais.json");
//console.log(animais);
const stringAnimais = JSON.stringify(animais);
// console.log(stringAnimais);
const objAnimais = JSON.parse(stringAnimais);
// console.log(objAnimais);

const novoAnimal = {
  id: 6,
  nome: "Polvo",
  tipo: "Aquatico",
  habitat: "Oceano",
};
objAnimais.animais.push(novoAnimal);
// console.log(objAnimais);

const modificaAnimal = objAnimais.animais.find((animal) => animal.id === 6);
if (modificaAnimal) {
  modificaAnimal.habitat = "Profundezas";
}
// console.log('Depois da modificação de habitat do polvo:');
// console.log(objAnimais);

const indiceAnimalRemover = objAnimais.animais.findIndex(
  (animal) => animal.id === 6,
);
if (indiceAnimalRemover !== -1) {
  objAnimais.animais.splice(indiceAnimalRemover, 5);
}

// console.log('Depois da remoção do animal polvo:');
// console.log(objAnimais);

const novaStringJsonAnimais = JSON.stringify(objAnimais, null, 1);
// console.log(novaStringJsonAnimais);
// console.log(objAnimais);

const pessoaOriginal = {
  id: 1,
  nome: "Alucard",
  idade: 300,
};

function copiarObjetoJson(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const pessoaModificada = copiarObjetoJson(pessoaOriginal);

pessoaModificada.idade = 576;

console.log("Alucard começo de Symphony of Night:");
console.log(pessoaOriginal);
console.log("Alucard atualmente:");
console.log(pessoaModificada);
