// FAZER:
//
// Marco 1
//
// [x] 1. Uma tela ou visualização
// [x] 2. Duas questões com pelo menos 3 alternativas cada
// [x] 3. Um botão para responder e ver qual a alternativa correta
//
// OBS: Nõa informar se estava errado ou certo, apenas qual DEVERIA ser a alternativa certa.
//
// Marco 1A
// [x] 1. Duas perguntas comsuas alternativas em radio buttons
// [x] 2. Um botão para responder e ver resultados
//
// Marco 1B
// [x] 1. Quando clicar em um radio button mostrar um alert com o valor do radio
//
// Marco 1C
// [x] 1. Apenas selecionar o radio button, não mais mostrar o alert
// [x] 2. Quando clicar no botão de ver resultado, mostrar o valor do radio button selecionado

// Marco 2
//
// [x] 1. Um input para o jogador escrever o nome dele
// [x] 2. Um botão Jogar que mostra as perguntas
// [x] 3. Pelo menos 3 perguntas
// [x] 4. Acima das perguntas mostrar "Olá, <nome>"
// [x] 5. Botão de mostrar respostas diz qual era a resposta certa e se a pessoa errou ou acertou
// [x] 6. Botão de jogar novamente
//
// Marco 2A
// [x] 1. Validar se as respostas estão certas ou não
// o WINDOW foi para que pudesse funcionar as func pois aqui no SandBox estava dando erro e isso foi um jeito de consguir arrumar
// para selecionar as alternativas, apertar o botão Ver Respostas e aparecer o que foi selecionado(quando foi necessário apertar o botão e aparecer o alert quando apertar Ver Respostas)
var respostas = {};
window.selecionarOpcao = function selecionarOpcao(questao, alternativa) {
  respostas[questao] = alternativa;
};
// Para ver o texto quando for apertado o Ver Resposta e ele aparecer o texto na página web, mas apenas o nome, sem as respostas (inicialemnte). Tive fazer  1,2,3,4 para pegar o HTML onde coloquei o Name, OnClick, ID e Label para puxar as info do HTML.
// Depois tiver que que fazer alteraçÒes após o Var Texto para conseguir ter as variáveis com as opcções corretas e depois adicionei o texto de Acertou ou Errou colocando ==, ? e /n, junto com o alert para aparecer com o resultado
window.resultado = function resultado() {
  var respostaquestao1 = "2014";
  var respostaquestao2 = "Maria Costa Checa";
  var respostaquestao3 = "1.100";
  var respostaquestao4 = "6";
  var texto =
    "A resposta correta para a pergunta 1 é " +
    respostaquestao1 +
    " e você " +
    (respostas.questao1 == respostaquestao1 ? "Acertou" : "Errou") +
    "\n" +
    "A resposta correta para a pergunta 2 é " +
    respostaquestao2 +
    " e você " +
    (respostas.questao2 == respostaquestao2 ? "Acertou" : "Errou") +
    "\n" +
    "A resposta correta para a pergunta 3 é " +
    respostaquestao3 +
    " e você " +
    (respostas.questao3 == respostaquestao3 ? "Acertou" : "Errou") +
    "\n" +
    "A resposta correta para a pergunta 4 é " +
    respostaquestao4 +
    " e você " +
    (respostas.questao4 == respostaquestao4 ? "Acertou" : "Errou");
  alert(texto);
};
// essa func foi para o caixa Insira Seu Nome e depois aparecer na página da web a informação digitada
window.comecar = function comecar() {
  var nome = document.querySelector("#nome").value;
  document.querySelector("#saudacao").innerHTML = "Olá, " + nome + "!";
  document.querySelector("#formulario-perguntas").classList.remove("esconder");
  document.querySelector("#formulario-nome").classList.add("esconder");
};
// essa função foi crida para conseguir deixar as perguntas invisíveis e depois conseguir resetar quando apertar novamente o Jogar Novamente
window.jogarnovamente = function jogarnovamente() {
  document.querySelector("#formulario-nome").reset();
  document.querySelector("#formulario-perguntas").reset();
  document.querySelector("#formulario-perguntas").classList.add("esconder");
  document.querySelector("#formulario-nome").classList.remove("esconder");
};
