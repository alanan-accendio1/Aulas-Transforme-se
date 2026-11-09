// Obter elemento HTML pelo ID
// getElementById("idDoElemento");

const elemento = document.getElementById("texto1");

// console.log(elemento);

// Obter elementos pela classe (mais de um elemento)
// getElementsByClassName("classe");

const textos = document.getElementsByClassName("texts");

// console.log(textos);

// Obter elementos pelo nome da tag
// getElementsByTagName("tag");

const paragrafos = document.getElementsByTagName("p");

// console.log(paragrafos);

// obter elementos com alta precisão
// querySelector("seletorCSS");

const seletor = document.querySelector(".text2");

// console.log(seletor);

// obter varios elementos com querySelector

const elementosQuery = document.querySelectorAll(".texts");

// console.log(elementosQuery);

// Acessando elementos filhos
// children - traz um HTMLCollection com os elementos filhos
// childNodes - traz um NodeList com os elementos filhos

const div1 = document.querySelector(".div1");

console.log(div1.children);
console.log(div1.childNodes);

// InnerHTML - Permite com que eu modifique o HTML de
// elementos (adicionar tags, textos, etc)

// div1.innerHTML = "<p> Elemento criado </p>";
// div1.innerHTML += "<p> Elemento 2 criado </p>";

const paragrafo1 = document.getElementById("paragrafo");

// textContent
// Modifica o texto de determinado elemento
paragrafo1.textContent = "Mudando o texto";

//

// Definindo atributos

const elementoH2 = document.getElementsByTagName("h2");

elementoH2[0].setAttribute("class", "elementoNovo");
elementoH2[0].setAttribute("id", "ElementoH2");
elementoH2[0].removeAttribute("id");

console.log(elementoH2[0]);

// Obtendo valores dos atributos

console.log(div1.getAttribute("class"));
