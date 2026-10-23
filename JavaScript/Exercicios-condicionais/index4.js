// Máquina de Lanches
// Um trailer de lanches tem o seguinte cardápio:
// • 1 - Hambúrguer (R$ 15,00)
// • 2 - Pizza (R$ 20,00)
// • 3 - Salada (R$ 12,00) Crie uma variável codigoLanche. Use a estrutura switch para
// verificar o código e exibir o nome do lanche e seu preço. Caso seja um número
// inválido, mostre "Código não encontrado".

let cardapio = Number(
  prompt(
    "Cardápio:\n1 - Hambúrguer (R$ 15,00)\n2 - Pizza (R$ 20,00)\n3 - Salada (R$ 12,00)\n\nDigite o código do lanche:",
  ),
);

switch (cardapio) {
  case 1:
    alert("Hambúrguer - R$ 15,00");
    break;
  case 2:
    alert("Pizza - R$ 20,00");
    break;
  case 3:
    alert("Salada - R$ 12,00");
    break;
  default:
    alert("Código não encontrado");
    break;
}
