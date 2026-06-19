const estudante = "Shallan";

if (1 > 0) {
  console.log(estudante);
}

console.log(estudante);

// Escopo Global

  const nome = "Camila"; // variável global

  function cumprimentar() {
    console.log(`Olá, ${nome}!`); // Acessa a var global
  }

  cumprimentar(); // ‘Olá, Camila!”

// Escopo de bloco

  if (1 > 0) {
    let nome = "Ana";
    console.log(nome); // ‘Ana’
  }

  // variável `nome` não está acessível
  console.log(nome); // Error: nome is not defined

  // IMPORTANTE:

  // Variáveis declaradas com var não seguem a regra do escopo de bloco! Elas serão consideradas globais e poderão ser acessadas de fora do bloco. Faça o teste:

  if (1 > 0) {
    var nome = "Ana";
    console.log(nome); // ‘Ana’
  }

  console.log(nome); // ‘Ana’
  // A falta de “controle” de escopo é um dos motivos pelo qual o uso de var foi abandonado e as boas práticas atuais recomendam apenas o uso de const e let.

// Escopo de Função

  function cumprimentar() {
    const nome = 'Camila'; // variável local
    const cumprimento = 'Olá'; // variável local
    console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
  }

  // as variáveis não podem ser acessada de fora da função
  console.log(`${cumprimento}, ${nome}!`); // Dará erro de “not defined” no console