// Pode Votar?
// Crie uma variável idadeParaVoto. Imprima no console "Não pode votar"
// se a idade for menor que 16, "Voto opcional" se tiver entre 16 e 17 anos ou mais de 70
// anos, e "Voto obrigatório" se tiver entre 18 e 70 anos.

let idadeParaVoto = Number(
  prompt("Digite sua idade para saber se pode votar: "),
);

if (idadeParaVoto < 16) {
  console.log("Não pode votar");
} else if ((idadeParaVoto >= 16 && idadeParaVoto <= 17) || idadeParaVoto > 70) {
  console.log("Voto opcional");
} else if (idadeParaVoto >= 18 && idadeParaVoto <= 70) {
  console.log("Voto obrigatório");
}
