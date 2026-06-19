// 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:
// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
const livro = {
  titulo: "Ritmo da Guerra",
  autor: "Brandon Sanderson",
  anoPublicacao: 2020,
  genero: "Fantasia",
};
console.log(livro);

// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades:
// título, autor, ano de publicação e gênero.
const anoAtual = new Date().getFullYear();
// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
livro.idadePublicacao = anoAtual - livro.anoPublicacao;
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
livro.mostrarDetalhes =
  "Detalhes do livro\n" +
  "Titulo: " +
  livro.titulo +
  "\n" +
  "Autor: " +
  livro.autor +
  "\n" +
  "Ano de publicação: " +
  livro.anoPublicacao +
  "\n" +
  "Gênero: " +
  livro.genero +
  "\n" +
  "Idade de publicação: " +
  livro.idadePublicacao +
  " anos";
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
console.log(livro.mostrarDetalhes);

// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as
// propriedades do objeto livro e imprimir no console os detalhes do livro.
console.log(`O livro ${livro["titulo"]} possui o gênero de ${livro["genero"]}`);

// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao.
// Esta propriedade deve ser inicializada como null.
// No final do arquivo livro.js, adicione uma avaliação ao objeto.
// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
const livro2 = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "Fantasia",
  idadePublicacao: anoAtual - 1954,
  avaliacao: null, // Nova propriedade para armazenar a avaliação
};

// Adicionando uma avaliação fictícia ao objeto livro
const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro2.avaliacao === null) {
  livro2.avaliacao = novaAvaliacao;
} else {
  console.log("Este livro já possui uma avaliação.");
}

// Exibindo detalhes do livro, incluindo a avaliação
console.log("Detalhes do Livro:");
console.log("Título: " + livro2.titulo);
console.log("Autor: " + livro2.autor);
console.log("Ano de Publicação: " + livro2.anoPublicacao);
console.log("Gênero: " + livro2.genero);
console.log("Idade de Publicação: " + livro2.idadePublicacao + " anos");
console.log(
  "Avaliação: " +
    (livro2.avaliacao === null
      ? "Nenhuma avaliação disponível."
      : "Nota: " +
        livro2.avaliacao.nota +
        ', Comentário: "' +
        livro2.avaliacao.comentario +
        '"'),
);
// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
livro2.genero = "Aventura fantástica";
// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro.
// Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
delete livro2.avaliacao;
console.log(livro2);
