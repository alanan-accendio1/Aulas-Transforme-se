// Calculadora Básica
// Crie três variáveis: numero1, numero2 e operador (esta última
// receberá um texto: "+", "-", "*" ou "/"). Use a estrutura switch para analisar o operador e
// realizar a conta matemática com os dois números. Atenção: Se o operador for o de
// divisão ("/"), use um if para garantir que o numero2 não seja zero, exibindo uma
// mensagem de erro nesse caso.

let num1 = 15;
let num2 = 5;
let operador = "+";

switch (operador) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    if (num2 === 0) {
      console.log("Erro: Não é possível dividir por zero!");
      break;
    } else {
      console.log(num1 / num2);
      break;
    }
}
