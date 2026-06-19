const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12312312312",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["551199999998", "551199999993"],
  // enderecos: [{
  //   rua: 'Rua Joseph Climber',
  //   numero: '45',
  //   complemento: 'apto 43'
  // },
  // {
  //   rua: 'Rua Dona Clotilde',
  //   numero: '71',
  //   complemento: null
  // }]
};

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes("enderecos")) {
  console.error("é necessário ter um endereço cadastrado");
}

const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);
const entradas = Object.entries(meuObjeto);
const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };
const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]
console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]
console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }

const meuObjeto1 = {
  nome: "ChatGPT",
  linguagem: "JavaScript",
  versao: "3.5",
};

for (let chave in meuObjeto1) {
  console.log(chave); // Saída: nome, linguagem, versao
}

const meuObjeto2 = {};

Object.defineProperty(meuObjeto2, "propriedadeNaoEnumeravel", {
  value: 42,
  enumerable: false,
});

for (let chave in meuObjeto2) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}

const meuObjeto3 = {};

Object.defineProperty(meuObjeto3, "propriedadeNaoEnumeravel", {
  value: 42,
  enumerable: false,
});

console.log(Object.keys(meuObjeto3)); // Saída: []

const meuObjeto4 = {};

// Criando uma propriedade não enumerável
Object.defineProperty(meuObjeto4, "propriedadeNaoEnumeravel", {
  value: 42,
  enumerable: true, // Definindo a enumerabilidade como true
});

// Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
console.log(Object.keys(meuObjeto4)); // Saída: ['propriedadeNaoEnumeravel']

// Exibindo o valor da propriedade
console.log(meuObjeto4.propriedadeNaoEnumeravel); // Saída: 42
