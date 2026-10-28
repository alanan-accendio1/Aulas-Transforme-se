// Exercícios functions

// Atividade 1
const somar = (x, y) => x + y;

// Atividade 2

const saudacao = (nome) => {
  console.log("Olá " + nome + " Seja bem vindo(a)!");
};

// Atividade 3

const dobro = (numero) => numero * 2;

// Atividade 4

const maiorIdade = (idade) => {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
};

// Atividade 5

const calcularArea = (base, altura) => base * altura;

// Atividade 6

const isPar = (numero) => {
  return numero % 2 === 0 ? "Número par" : "Número impar";
};

// Atividade 7

const celsius = (temperatura) => temperatura * 1.8 + 32;

// Atividade 8

function desconto(preco, porcentagem) {
  let valorDesconto = (preco * porcentagem) / 100;
  return preco - valorDesconto;
}

// Atividade 9

function gerarBoletim(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

// Atividade 10

function fazerSaque(saldoAtual, valorSaque) {
  if (valorSaque > saldoAtual) {
    return "Saldo insuficiente";
  } else {
    let novoSaldo = saldoAtual - valorSaque;
    return "Saque realizado. Novo saldo: R$" + novoSaldo;
  }
}
