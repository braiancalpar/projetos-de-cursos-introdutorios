// Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

const nome = "Kaladin";
let idade = 25;
const radiante = true;
console.log(
  "Variavel nome:",
  nome,
  "\nTipo: String\n" + "Variavel idade:",
  idade,
  "\nTipo: Número\n" + "Variavel radiante:",
  radiante,
  "\nTipo: Booleano",
);
console.log(typeof nome, typeof idade, typeof radiante);

// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

const primeiroNome = "Kaladin";
const segundoNome = "Stormblessed";
const nomeCompletoConcatenado = primeiroNome + " " + segundoNome;
const nomeCompletoTemplateStrings = `${primeiroNome} ${segundoNome}`;
console.log("Usando operador +:", nomeCompletoConcatenado);
console.log("Usando template strings:", nomeCompletoTemplateStrings);

// Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

const ideais = 5;
const cavaleiro = "cavaleiro radiante";
const mensagem = `Existem ${ideais} ideais para cada ordem de ${cavaleiro}.`;
console.log(mensagem);

// Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let idadeKaladin = 20;
console.log(
  "No inicio de Caminho dos Reis o Kaladin tem",
  idadeKaladin,
  "anos de idade.",
);
idadeKaladin = 23;
console.log(`Já em Ritmo da Guerra ele tem ${idadeKaladin} anos.`);

// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var fora = "Fora do bloco";

if (true) {
  var dentro = "Dentro do bloco";
  console.log(fora); // retorna 'Fora do bloco'
  console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////

let fora2 = "Fora do bloco";

if (true) {
  let dentro2 = "Dentro do bloco";
  console.log(fora2); // retorna 'Fora do bloco'
  console.log(dentro2); // retorna 'Dentro do bloco'
}

console.log(fora2); // retorna 'Fora do bloco'
//console.log(dentro2); // erro 'dentro is not defined'

// Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

const chovendo = true;

if (chovendo == true) {
  console.log("Está chovendo leve um guarda-chuva!");
} else {
  console.log("Pode deixar o guarda-chuva, hoje não será necessário.");
}
