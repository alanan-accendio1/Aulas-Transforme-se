// Classificação de Triângulos Crie três variáveis representando as medidas dos lados
// de um triângulo (ladoA, ladoB e ladoC).
// • Se os três lados forem iguais, exiba "Triângulo Equilátero".
// • Se dois lados forem iguais e um diferente, exiba "Triângulo Isósceles".
// • Se todos os lados forem diferentes, exiba "Triângulo Escaleno".
// • Exemplo de execução: Se ladoA = 5, ladoB = 5 e ladoC = 8, o console exibirá:
// "Triângulo Isósceles".

let ladoA = Number(prompt("Digite o valor do lado A:"));
let ladoB = Number(prompt("Digite o valor do lado B:"));
let ladoC = Number(prompt("Digite o valor do lado C:"));

if (ladoA === ladoB && ladoB === ladoC) {
  alert("Triângulo Equilátero");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  alert("Triângulo Isósceles");
} else {
  alert("Triângulo Escaleno");
}
