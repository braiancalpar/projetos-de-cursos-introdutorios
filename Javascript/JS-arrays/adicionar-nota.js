const notas = [10, 6, 8];

notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// arrays vazios

const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)