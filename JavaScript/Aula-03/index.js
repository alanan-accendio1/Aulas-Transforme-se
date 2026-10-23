// AND - && - As duas condições precisam ser verdadeiras
// para a condição inteira ser verdadeira (true)

// V V = V
// V F = F
// F F = F
// F V = F

// As duas verdadeiras
// AND - &&
// if (10 > 5 && 8 < 10) {
//   alert("Verdadeiro com AND");
// }

// OR - || - A condição será verdadeira se
// ao menos uma das condições for verdadeira

// V V = V
// V F = V
// F V = V
// F F = F

// Ou uma ou outra verdadeira
// OR - ||
// Nesse caso o 10 < 5 é falso, mas o 8 < 10 é verdadeiro
if (10 < 5 || 8 < 10) {
  alert("Verdadeiro com OR");
}
