let nomeEstudante;
const professora = 'Lift';

console.log(nomeEstudante);
console.log(typeof nomeEstudante);
console.log(typeof professora);

let telefoneEstudante = null;

console.log(typeof telefoneEstudante);

// Conversão para números

console.log(Number("1")); // retorna o número 1 
console.log(Number("Alura")); // retorna NaN
console.log(Number(undefined)); // retorna NaN
console.log(Number(null));// retorna 0
Number(true); // retorna 1
Number(false); // retorna 0

// Conversão para inteiro ou número flutuante

parseInt("4"); // retorna o número 4
parseInt("4.5"); // retorna o número 4

parseFloat("4"); // retorna o número 4
parseFloat("4.5"); // retorna o número 4.5
parseFloat("4.5abc"); // retorna o número 4.5

// Uma outra forma de fazer a coerção de tipos (quando o JavaScript tenta “forçar” de forma implícita a conversão de um valor de um tipo para outro) é utilizando o operador unário +. Por exemplo

// +’45’ // retorna o número 45
// +true // retorna o número 1

console.log(typeof +"45"); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’

// Conversão para strings

String(2); // retorna '2'
String(undefined); // retorna 'undefined'
String(true); // retorna 'true'

// Determina se um conjunto de caracteres pode ser encontrado dentro de uma string, retornando true ou false:

'estudando JavaScript'.includes('Java'); // retorna true

const texto = 'estudando JavaScript';
texto.includes('Java'); // retorna true

// Converte todos os caracteres da string para letras minúsculas.

'POR FAVOR, NÃO GRITE'.toLowerCase(); // retorna 'por favor, não grite'

const texto2 = 'POR FAVOR, NÃO GRITE';
texto2.toLowerCase(); // retorna 'por favor, não grite'
