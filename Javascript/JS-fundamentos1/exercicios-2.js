// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
const frase = "Jornada antes do fim, vida antes da morte";
console.log(frase.length);
console.log(frase.toLocaleUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const valorNull = null;
let naoRecebe;
console.log(valorNull, naoRecebe);

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const nome = "Adolin";
const idade = 25;
const radiante = false;
console.log(`Nome: ${nome}\nIdade: ${idade}\nÉ Radiante? ${radiante}`);

// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
const resposta = 42;
const aResposta = "Quarenta e dois";

console.log(Number(aResposta));
console.log(String(resposta));

// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
const scooby = "Doze. Nós não vamos entrar!";
console.log(scooby.toLocaleUpperCase());
console.log(scooby.toLocaleLowerCase());
console.log(scooby.slice(0, 4));
