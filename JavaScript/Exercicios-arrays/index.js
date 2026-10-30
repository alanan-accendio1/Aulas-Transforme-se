function atividade1() {
  let filmes = ["Titanic", "Vingadores", "Rambo"];
  console.log("Minha lista tem ${filmes.length} filmes");
  console.log("Minha lista tem " + filmes.length + " filmes");
}

function atividade2() {
  let carrinho = ["Arroz", "feijão"];
  carrinho.push("Macarrão");
  carrinho.push("Carne");
  carrinho.pop();
  console.log(carrinho);
}

function atividade3() {
  let filaBanco = ["Carlos", "Maria", "João"];
  filaBanco.unshift("Seu José");
  let atendifo = filaBanco.shift();
  console.log("Atendimento de hoje: " + atendido);
  console.log(filaBanco);
}

function atividade4() {
  let convidados = ["Ana", "Bruno", "Carlos"];
  let nomeBusca = "Bruno";

  console.log(
    convidados.includes(nomeBusca) ? "Acesso liberado" : "Acesso negado",
  );
}

function atividade5() {
  let livros = ["Harry Potter", "Senhor dos Anéos", "Nárnia"];
  let posicao = livros.indexOf("Nárnia");
  console.log(
    posicao !== -1
      ? "O livro está na posição ${posicao}"
      : "Livro não encontrado.",
  );
}

function atividade6() {
  let corredores = ["SMS", "Izabella", "Alan", "Ryan - Giovanni"];
  let podio = corredores.slice(0, 3);
}

function atividade7() {
  let alunos = ["Mayara", "Gustavo", "Well", "Joana", "Giovanni"];

  for (let i = 0; i < alunos.length; i++) {
    console.log("indice: ${i}: ${alunos[i]}");
  }
}

function atividade8() {
  let notas = [8, 7, 9, 6, 1];
  let quantidadeAprovados = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
      quantidadeAprovados++;
    }
  }

  console.log("Total de aprovados: ${quantidadeAprovados");
}

function atividade9() {
  let emailsCadastrados = ["num1@email.com", "num2@email.com"];
  let novoEmail = "num3@email.com";

  if (emailsCadastrados.includes(novoEmail)) {
    console.log("Erro: E-mail já cadastrado");
  } else {
    emailsCadastrados.push(novoEmail);
    console.log("Cadastro realizado com sucesso!");
    console.log(emailsCadastrados);
  }
}

function atividade10() {
  let numerosOriginais = [10, 20, 30, 40];
  let numerosInvertidos = [];
  for (let i = numerosOriginais.length - 1; i >= 0; i--) {
    numerosInvertidos.push(numerosOriginais[i]);
  }
  console.log(numerosOriginais);
  console.log(numerosInvertidos);
}
