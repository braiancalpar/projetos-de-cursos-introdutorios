// 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa.
// Este objeto deve ter as seguintes propriedades:
// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.
// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
//Feito.
const infoPessoa = {
  nome: "Adolin",
  idade: 25,
  solteiro: false,
  hobbies: ["Equitação", "Esgrima", "Moda"],
  endereco: {
    rua: "Avenida dos Arautos",
    cidade: "Urithiru",
    estado: "Alethkar",
  },
};
function mostrarInfoPessoa(pessoa) {
  return (
    `Nome: ${pessoa["nome"]} Tipo: ${typeof pessoa.nome}\nIdade: ${pessoa["idade"]} Tipo: ${typeof pessoa.idade}\nEstado civil: ` +
    (pessoa["solteiro"] ? "Solteiro" : "Casado") +
    ` Tipo: ${typeof pessoa.solteiro}\nHobbies: ${pessoa["hobbies"]} Tipo: ${typeof pessoa.hobbies}\nEndereço: ${pessoa.endereco["rua"]} - ${pessoa.endereco["cidade"]} - ${pessoa.endereco["estado"]}`
  );
}
console.log(mostrarInfoPessoa(infoPessoa));

// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:
// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.
// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
//Feito

// 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:
// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.
// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.
// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.
// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que
// residem na cidade fornecida.
// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
const pessoas = [
  { nome: "Kaladin", idade: 23, cidade: "Urithiru" },
  { nome: "Adolin", idade: 24, cidade: "Urithiru" },
  { nome: "Venli", idade: 26, cidade: "Narak" },
  { nome: "Rysn", idade: 22, cidade: "Thaylen" },
  { nome: "Gawx", idade: 16, cidade: "Azir" },
];

function mostrarListaPessoas(listaPessoas) {
  console.log("Lista de pessoas:");
  listaPessoas.forEach((pessoa) => {
    console.log(
      `Nome: ${pessoa["nome"]} Idade: ${pessoa["idade"]} Cidade: ${pessoa["cidade"]}`,
    );
  });
}

function filtrarPorCidade(listaPessoas, cidade) {
  return listaPessoas.filter((pessoa) => pessoa.cidade === cidade);
}

mostrarListaPessoas(pessoas);
pessoas.push({ nome: "Lift", idade: 13, cidade: "Azir" });
mostrarListaPessoas(pessoas);
//console.log(filtrarPorCidade(pessoas, 'Urithiru'))
const pessoasEmUrithiru = filtrarPorCidade(pessoas, "Urithiru");
console.log("Pessoas em Urithiru:");
console.log(pessoasEmUrithiru);
const pessoasEmAzir = filtrarPorCidade(pessoas, "Azir");
console.log("Pessoas em Azir:");
console.log(pessoasEmAzir);

// 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:
// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem
// apropriada nesse caso.
// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
const calculadora = {
  soma: (a, b) => a + b,
  subtracao: (a, b) => b - a,
  multiplicacao: (a, b) => a * b,
  divisao: (a, b) => (b != 0 ? a / b : "Divisão por zero não é permitida!"),
  calcularMedia: (numeros) => {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    return soma / numeros.length;
  },
};
console.log("Soma:", calculadora.soma(5, 6));
console.log("Subtração:", calculadora.subtracao(14, 26));
console.log("Multiplicação:", calculadora.multiplicacao(5, 6));
console.log("Divisão:", calculadora.divisao(150, 10));
const numerosMedia = [10, 8, 6, 7, 10, 7.5];
console.log(
  "Calcula a média:",
  calculadora.calcularMedia(numerosMedia).toFixed(2),
);
// 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:
// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo
// suficiente antes de efetuar o saque.
// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:
// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as
// propriedades do objeto.
// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas
// no console.
const contaBancaria = {
  titular: "Adalberto Lebon",
  saldo: 10000,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  },
};

const cliente = {
  nome: "Roberto Lebon",
  conta: contaBancaria,
};
function mostrarSaldo(objCliente) {
  console.log(
    `Nome do cliente: ${cliente.nome}\nSaldo em conta: ${cliente.conta.saldo}`,
  );
}
mostrarSaldo(cliente);
cliente.conta.depositar(5000);
cliente.conta.sacar(2500);
mostrarSaldo(cliente);
