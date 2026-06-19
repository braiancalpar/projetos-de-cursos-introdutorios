const biblioteca = [
  {
    id: 1,
    titulo: "Caminho dos Reis",
    autor: "Brandon Sanderson",
    anoPublicacao: 2010,
  },
  {
    id: 2,
    titulo: "Palavras de Radiância",
    autor: "Brandon Sanderson",
    anoPublicacao: 2014,
  },
  {
    id: 3,
    titulo: "Sacramentadora",
    autor: "Brandon Sanderson",
    anoPublicacao: 2017,
  },
  {
    id: 4,
    titulo: "Ritmo da Guerra",
    autor: "Brandon Sanderson",
    anoPublicacao: 2020,
  },
];

function encontrarLivroPorId(id) {
  return biblioteca.find((livro) => livro.id === id) || null;
}
const livroEncontrado1 = encontrarLivroPorId(2);
// console.log("Livro Encontrado (ID 2):");
// console.log(livroEncontrado1);
// console.log(encontrarLivroPorId(4));
// console.log(encontrarLivroPorId(5));

const catalogoFilmes = [
  {
    id: 1,
    titulo: "Senhor dos Aneis - O retorno do rei",
    diretor: "Peter Jackson",
    anoLancamento: 2003,
  },
  {
    id: 2,
    titulo: "Duna: Parte Dois",
    diretor: "Denis Villeneuve",
    anoLancamento: 2024,
  },
  {
    id: 3,
    titulo: "Devoradores de estrelas",
    diretor: "Phil Lord e Christopher Miller",
    anoLancamento: 2026,
  },
  {
    id: 4,
    titulo: "Homem-Aranha: Através do Aranhaverso",
    diretor: "Joaquim Dos Santos, Kemp Powers e Justin K. Thompson",
    anoLancamento: 2023,
  },
];

function filtrarFilmesPorAno(ano) {
  return catalogoFilmes.find((filme) => filme.anoLancamento === ano) || null;
}
// console.log(filtrarFilmesPorAno(2003));
// console.log(filtrarFilmesPorAno(2024));

const listaProdutos = [
  { id: 1, nome: "Cajado de Lich", preco: 1725.99 },
  { id: 2, nome: "Botas Voadoras", preco: 849.99 },
  { id: 3, nome: "Elmo do Algoz Tirano", preco: 2379.99 },
  { id: 4, nome: "Bolsa sem fundo", preco: 5915.99 },
];

function filtrarOrdenarProdutosPorPreco(maxPreco) {
  const produtosFiltrados = listaProdutos.filter(
    (produto) => produto.preco <= maxPreco,
  );
  return produtosFiltrados.sort((a, b) => a.preco - b.preco);
}

const produtosAte3k = filtrarOrdenarProdutosPorPreco(3000.0);
// console.log("Produtos com preço até 3000.00 (ordenados por preço crescente):");
// console.log(produtosAte3k);

const animais = [
  { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
  { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
  { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 },
  { id: 4, nome: "Larkin", especie: "Crustáceo", idade: 4 },
];

function ordenarAnimais(comparacao) {
  return animais.sort(comparacao);
}
function compararIdadeCrescente(a, b) {
  //   return animais.sort((a, b) => {
  //     if (a.idade < b.idade) {
  //       return -1;
  //     }
  //     if (a.idade > b.idade) {
  //       return 1;
  //     }
  //   });
  return a.idade - b.idade;
}

function compararIdadeDecrescente(a, b) {
  return b.idade - a.idade;
}

const animaisOrdenadosCrescente = ordenarAnimais(compararIdadeCrescente);
// console.log("Animais Ordenados por Idade (Crescente):");
// console.log(animaisOrdenadosCrescente);
//// console.log(compararIdadeCrescente(animais, "idade"));

const animaisOrdenadosDecrescente = ordenarAnimais(compararIdadeDecrescente);
// console.log("\nAnimais Ordenados por Idade (Decrescente):");
// console.log(animaisOrdenadosDecrescente);

const departamentos = [
  {
    id: 1,
    nome: "ACIG - Atendimento ao Cliente Interdimensional Geral",
    funcionarios: [
      {
        id: 101,
        nome: "Allana Hurts",
        cargo:
          "Analista de Problemas Interdimensionais e Xerife de dimensão de bolso",
      },
      {
        id: 102,
        nome: "Roberto Gillard",
        cargo: "Gerente de Vendas Interdimensionais",
      },
    ],
  },
  {
    id: 2,
    nome: "SDP - Supervisão e Desenvolvimento de Portais",
    funcionarios: [
      {
        id: 201,
        nome: "Magnus Orcus",
        cargo: "Desenvolvedor de Dimensões de bolso",
      },
      {
        id: 202,
        nome: "Arsinax Stelranius",
        cargo: "Analista de Viagem Interdimensional base",
      },
    ],
  },
];

// Função para encontrar um funcionário por ID em qualquer departamento
function encontrarFuncionarioPorId(id) {
  for (const departamento of departamentos) {
    const funcionarioEncontrado = departamento.funcionarios.find(
      (funcionario) => funcionario.id === id,
    );
    if (funcionarioEncontrado) {
      return funcionarioEncontrado;
    }
  }
  return null;
}

// Encontra um funcionário com ID existente e imprime no console
const funcionarioEncontrado1 = encontrarFuncionarioPorId(102);
console.log("Funcionário encontrado (ID 102):");
console.log(funcionarioEncontrado1);

// Encontra um funcionário com ID inexistente e imprime no console
const funcionarioEncontrado2 = encontrarFuncionarioPorId(103);
console.log("\nFuncionário encontrado (ID 103):");
console.log(funcionarioEncontrado2);
