// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles
//  utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let saldo = 2000;
let deposito = 300;
let saque = 500;
const operacao = saldo + deposito - saque;
console.log("Saldo:", saldo);
console.log("Saldo após deposito e saque:", operacao);

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
const numero = 7;
const resultado = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(resultado); // Ímpar

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize
//  variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
const user = true;
const access = false;
const verificacao =
  user === true && access == true
    ? "Acesso permitido"
    : "Acesso não autorizado";
console.log(verificacao);

// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
const condicao1 = true;
const condicao2 = false;

const resultado = condicao1 || condicao2;

console.log("Resultado do operador OR:", resultado); // Saída: true

// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade
// mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
const idadeMinima = 18;
const idadeUsuario = 21;

if (idadeUsuario >= idadeMinima) {
  console.log("Você pode comprar o ingresso. Bom show!");
} else {
  console.log("Você não tem idade suficiente para comprar o ingresso.");
}
