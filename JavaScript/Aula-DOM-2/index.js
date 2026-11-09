// Criando elemento com DOM
const titulo = document.createElement("h1");

// Adicionando conteúdo de texto para o elemento h1
titulo.textContent = "Este é um titulo criado com DOM";

// Adicionando uma classe ao elemento h1
titulo.setAttribute("class", "titulo");

// Adicionando o elemento ao body da página
document.body.appendChild(titulo);

// Selecionando elemento especificp pelo CSS
let div = document.querySelector(".div1");

// childNodes
// Traz várias informações osbre o elemento em indices
console.log(div.childNodes);

// children
// Traz somente elementos filhos (HTMLCollection)
console.log(div.children);

// Adicionando novo elemento </p> na DIV
div.innerHTML += "<p> paragrafo adicionado com DOM </p>";

div.children[0].classList.add("blue");

// Insert Before
// Adicionar um novo elemento PAI antes de um determinado elemento filho
const elementoPAI = document.querySelector(".div1");

const elementoReferencia = document.querySelector(".texto");

const novoElemento = document.createElement("h1");
novoElemento.textContent = "Novo elemento criado";

elementoPAI.insertBefore(novoElemento, elementoReferencia);
