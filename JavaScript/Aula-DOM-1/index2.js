const h1 = document.getElementById("texto1");

// Estilos através do atributo style
h1.style.color = "red";
h1.style.border = "1px solid green";
h1.style.backgroundColor = "#f2f2f2";

// Estilos através de classes (classList - adicionar ou remover)
const h12 = document.getElementById("texto2");

h12.classList.add("red");
h12.classList.remove("red");

// Adicionando styles com setAttribute
const h2 = document.querySelector("#texto3");

h2.setAttribute("style", "color: red; background-color: blue");

// Criando elementos

// Elemento div criado
const div = document.createElement("div");

// Texto de dento do elemento
div.innerHTML = "Div criada pelo JS";

// Estilos do elemento
div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "red";
div.style.color = "#fff";

document.body.appendChild(div);
