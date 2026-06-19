const notaPrimeiroBi = 8;
const notaSegundoBi = 7.3;
const notaTerceiroBi = 8;
const notaQuartoBi = 9.9;

let media =
  (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
  media += media * 0.1;
}

console.log(`a média é ${media.toFixed(2)}`);

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

//const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;

//console.log(resultado);

let resultado;
resultado = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", resultado);