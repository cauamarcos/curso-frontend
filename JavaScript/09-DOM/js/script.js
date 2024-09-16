// movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// selecionando elemento por tag
const listItems = document.getElementsByTagName("li");
console.log(listItems);

// selecionando por id
const title = document.getElementById("title");
console.log(title);

// selecionando por classe
const products = document.getElementsByClassName("product");
console.log(products);

// selecionando por css
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const titleQuery = document.querySelector("#title");
console.log(titleQuery);

// insertBefore
const p = document.createElement("p"); // cria um parágrafo vazio

const header = title.parentElement; // acessa o pai do title

header.insertBefore(p, title); // adiciona o p antes do title

// appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo título";

header.replaceChild(h2, title);

// criando um nó de texto
const myText = document.createTextNode("Mais um título");

const h3 = document.createElement("h3");

h3.appendChild(myText);

const main = document.querySelector("#main-container");

main.appendChild(h3);

// alterando atributo
const firstLink = navLinks.querySelector("a");

firstLink.setAttribute("href", "https://www.google.com");
firstLink.setAttribute("target", "_blank")
console.log(firstLink.getAttribute("href"));

// altura e largura
const footer = document.querySelector("footer");

console.log(footer.offsetWidth); // a borda é considerada
console.log(footer.offsetHeight);
console.log(footer.clientWidth); // a borda é desconsiderada
console.log(footer.clientHeight);

// posição do elemento
const product1 = products[0];
console.log(product1.getBoundingClientRect())

// css com js
main.style.color = "red";
main.style.backgroundColor = "#ddd"

// alterando o estilo de vários elementos
for(const li of listItems) {
    li.style.backgroundColor = "#ddd"
}
