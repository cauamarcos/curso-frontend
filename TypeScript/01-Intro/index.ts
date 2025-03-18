// TypeScript não é uma linguagem de programação, é um superset para JS, ou seja, adiciona funções ao JS
// como tipagem de variáveis. Precisa ser compilado em JS

const firstName = "Cauã";

function greeting(name: string) {
    console.log("Olá, " + name);
}

greeting(firstName);
