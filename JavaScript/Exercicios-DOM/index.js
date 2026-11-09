const atividade1 = () => {
  const elementoNovo = document.createElement("h1");

  elementoNovo.setAttribute("id", "titulo");
  elementoNovo.textContent = "Olá, Visitante!";
  elementoNovo.style.border = "1px solid red";

  document.body.appendChild(elementoNovo);
};

const atividade2 = () => {
  const paragrafo = document.createElement("p");
  paragrafo.textContent = "Aviso importante";
  paragrafo.style.color = "red";
  paragrafo.style.fontSize = "24px";
  paragrafo.style.border = "1px solid blue";

  document.body.appendChild(paragrafo);
};

const atividade3 = function () {
  const dream = document.createElement("img");
  dream.setAttribute(
    "src",
    "https://i.pinimg.com/736x/96/cd/82/96cd82336ae9c286abafbba6cd925e31.jpg",
  );

  dream.setAttribute(
    "alt",
    "Grupo de Kpop e Rock, Dreamcatcher. 7 integrantes do grupo com figurinos vermelhos que lembram generais",
    // Elas tem musicas muito boas,
    // recomendo "Scream" para quem gosta de rock
    // e recomendo "Deja Vu" que é pancada.
    // Muito bom, muito bom. São fera
  );
  document.body.append(dream);
};

function atividade4() {
  const div = document.createElement("div");
  div.textContent = "Modo Escuro Ativado";
  div.style.color = "#fff";
  div.style.backgroundColor = "#000";

  document.body.appendChild(div);
}

const atividade5 = () => {
  let listaCompras = ["Maça", "Manga", "Fiat Uno", "Caju", "uva", "Pitaia"];

  const ul = document.createElement("ul");

  document.body.appendChild(ul);

  listaCompras.forEach((elemento) => {
    const li = document.createElement("li");
    li.textContent = elemento;
    ul.appendChild(li);
  });
};

const atividade6 = () => {
  let produto = {
    nome: "Shampoo",
    preco: 20,
  };

  const div = document.createElement("div");
  div.setAttribute("id", "vitrine");

  div.innerHTML = `<h2> ${produto.nome} </h2> <p> ${produto.preco} </p>`;

  document.body.appendChild(div);
};

const atividade7 = () => {
  const div = document.createElement("div");
  div.setAttribute("id", "propaganda");

  div.textContent = "Compre agora!";
  document.body.appendChild(div);

  // Simulando fechamento do anúncio

  const removerDiv = document.getElementById("propaganda");
  removerDiv.remove();
};

const atividade8 = () => {
  for (let i = 0; i < 3; i++) {
    const paragrafo = document.createElement("p");
    paragrafo.setAttribute("class", "segredo");
    paragrafo.textContent = "Senha123";
    document.body.appendChild(paragrafo);
  }

  const paragrafos = document.querySelectorAll(".segredo");
  paragrafos.forEach((elemento) => {
    elemento.textContent = "*****";
  });
};

const atividade9 = () => {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "fila");
  document.body.appendChild(ul);

  const li1 = document.createElement("li");
  li1.setAttribute("id", "cliente1");
  li1.textContent = "João";

  const li2 = document.createElement("li");
  li2.setAttribute("id", "cliente2");
  li2.textContent = "Maria";

  ul.appendChild(li1);
  ul.appendChild(li2);

  // Cliente VIP

  const vip = document.createElement("li");
  vip.textContent = "Cliente VIP";

  ul.insertBefore(vip, li2);
};

const atividade10 = () => {
  const div = document.createElement("div");

  div.setAttribute("id", "painel");
  document.body.appendChild(div);

  // Nova div
  const novaDiv = document.createElement("div");
  novaDiv.setAttribute("id", "statusAntigo");
  novaDiv.textContent = "Pedido pendente...";
  div.appendChild(novaDiv);

  // Nova div2

  const novaDiv2 = document.createElement("div");
  novaDiv2.setAttribute("id", "statusNovo");
  novaDiv2.setAttribute("class", "sucesso");
  novaDiv2.textContent = "Pedido Entregue!";

  // Replace Child
  div.replaceChild(novaDiv2, novaDiv);
};

atividade1();
atividade2();
atividade3();
atividade4();
atividade5();
atividade6();
atividade7();
atividade8();
atividade9();
atividade10();
