// parâmetros/argumentos
// retorno
console.log(exibeInfosEstudante('Shallan', 10));
console.log(exibeInfosEstudante('Lift', 7));

function exibeInfosEstudante(nome, nota) {
  return `o nome é ${nome} e a nota é ${nota}`;
}

// hoisting

// declaração da função
function somarDoisNumeros(numA, numB) {
 return numA + numB;
}

// execução (ou chamada) da função
somarDoisNumeros(2, 2);

// atribuindo o retorno de uma função a uma variável
const resultado = somarDoisNumeros(2, 2);
console.log(resultado);

//Na chamada da função, o JavaScript atribuiu o primeiro parâmetro a dividendo e o segundo a divisor, conforme a ordem que está na declaração da função.
function dividir(dividendo, divisor) {
 return dividendo / divisor;
}

const resultado = dividir(10, 2);
console.log(`o resultado é ${resultado}`); // o resultado é 5

//Se por algum motivo os valores de dividendo e divisor forem passados na ordem invertida no momento da execução da função, o resultado não será o mesmo:
const resultado = dividir(2, 10);
console.log(`o resultado é ${resultado}`); // o resultado é 0.2