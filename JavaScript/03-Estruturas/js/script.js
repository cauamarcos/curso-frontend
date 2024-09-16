// Variáveis

let  nome = "Caua";
console.log(nome);

nome = "Cauã Marcos";
console.log(nome);

const idade = 20;
console.log(idade);

// JavaScript é case sensitive
// Símbolos permitidos na criação de variáveis são: _ e $

// prompt - pouco utilizado

const age = prompt("Digite a sua idade: ");
console.log(`Você tem ${age} anos.`);

// // alert - também não é muito utilizado

alert("Testando");

// Math

console.log(Math.max(5, 2, 1, 10));
console.log(Math.floor(5.4));

// console

console.error("erro");
console.warn("aviso");

// estruturas de controle

const user = "César";

if(user === "Cauã") {
    console.log("Olá, Cauã!");
}
else {
    console.log(`Olá, ${user}!`);
}

// estruturas de repetição

let num = 0;

while(num < 10) {

    console.log(num);
    num++;

}

do {
    console.log(num);
    num++;

    if(num === 13) {
        console.log("É 13!")
        break;
    }

} while(num < 20);

for(let i = 0; i < num; i++) {

    if(i % 2 === 0) {
        continue; // pula a execução para o próximo loop
    }

    console.log(i);

}

const job = "Programador";

switch(job) {
    case "Advogado":
        console.log("Você mente!");
        break;
    case "Programador":
        console.log("Você faz programa!");
        break;
    default:
        console.log("Desempregado?")
}