// Categoria Idade
// Crie uma variável chamada idade. Faça um programa que exiba
// no console: "Criança" se for menor que 12,
// "Adolescente" entre 12 e 17, "Adulto" entre 18
// e 59, e "Idoso" se tiver 60 anos ou mais.

let idade = Number(prompt("Digite sua idade: "));

if (idade < 12) {
  alert("Criança");
} else if (idade >= 12 && idade <= 17) {
  alert("Adolescente");
} else if (idade >= 18 && idade <= 59) {
  alert("Adulto");
} else if (idade >= 60) {
  alert("Idoso");
} else {
  alert("Algo deu errado!");
}
