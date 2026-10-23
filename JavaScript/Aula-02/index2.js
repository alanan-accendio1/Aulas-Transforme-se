// + - Adição
// - - Subtração
// * - Multiplicação
// ** - Potenciação
// / - Divisão
// % - Resto de divisão

// let num1 = Number(prompt("Digite um número:"));
// let num2 = Number(prompt("Digite outro número:"));

// let soma = num1 + num2;
// let sub = num1 - num2;
// let mult = num1 * num2;
// let pot = num1 ** num2;
// let div = num1 / num2;
// let resto = num1 % num2;

// alert("Soma: " + soma);
// alert("Subtração: " + sub);
// alert("Multiplicação: " + mult);
// alert("Potência: " + pot);
// alert("Divisão: " + div);
// alert("Resto de divisão: " + resto);

// 1. Par ou Ímpar
// Fazer uma condição para saber se o número é par ou impar

// 1
// Uma forma de fazer
// let num = prompt("Digite um número para saber se é par ou ímpar");

// if (num % 2 === 0) {
//   alert("É par");
// } else {
//   alert("É ímpar");
// }

// 2
// Outra forma de fazer
let num = Number(prompt("Digite um número:"));

// 2.1
// if (numero % 2 == 0) {
//   alert("Número é par");
// } else {
//   alert("Número é impar");
// }

// 2.2
alert(num % 2 == 0 ? "Numero par" : "Numero ímpar");
