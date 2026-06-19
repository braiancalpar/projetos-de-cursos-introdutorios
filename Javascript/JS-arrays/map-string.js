const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

const listaProdutos = [
  "pôster A4",
  "pôster A5",
  "camiseta lisa",
  "camiseta estampada",
  "pin de metal",
  "cartela de adesivos",
];

const listaAtualizada = listaProdutos.map((produto) => {
  return `${produto} - unidade`;
});

console.log(listaAtualizada);
