// > - Maior
// < - Menor
// == - Igualdade
// === - Igualdade + tipo da variável
// != - Diferente
// !== - Diferença + tipo da variável

// let idade = Number(prompt("Digite sua idade: "));

// Somente será executado o comando SE a condição for verdadeira
// O else somente será executado SE a condição for falsa
// if (idade >= 18) {
//   alert("Você é maior de idade!");
// } else {
//   alert("Você é menor de idade.");
// }

// Dia da semana
let diaDaSemana = prompt("Digite o dia da semana");

// let idade = prompt("Digite sua idade:");

// Operador ternário
// condição ? seForVerdadeira : seForFalso
// alert(idade > 18 ? "Maior de idade" : "Menor de idade:");

// toLowerCase() - Método que transforma toda string em minúsculo
// toUpperCase() - Método que transforma toda string em maiúsculo
if (diaDaSemana.toLowerCase() == "segunda") {
  alert("NMIXX fez comeback!!");
} else if (diaDaSemana.toLowerCase() == "terca") {
  alert("Os albuns do Dreamcatcher são obra-prima");
} else if (diaDaSemana.toLowerCase() == "quarta") {
  alert("T-T    Saudade do meu NewJeans OT5");
} else {
  alert("Algo deu errado...");
}
