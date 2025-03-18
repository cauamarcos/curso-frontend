"use strict";
// arrays
let numbers = [1, 2, 3];
const nums = [100, 200]; // sintaxe alternativa
numbers.push(4);
console.log(numbers[1]);
// tipo any: deve ser evitado ao máximo pois vai contra os princípios do TS
const arr1 = [1, "dois", false, []];
let variavel = 2;
variavel = "quatro";
// tipos de parâmetros e retorno de funções
function soma(a, b) {
    return a + b;
}
// função anônima
setTimeout(function () {
    const name = "César";
    console.log(name);
}, 2000);
// tipos de objetos + propriedade opcional
function greeting(fullName) {
    if (fullName.lastName)
        console.log(`Olá ${fullName.firstName} ${fullName.lastName}`);
    else
        console.log(`Olá ${fullName.firstName}`);
}
// os parâmetros opcionais devem vir depois dos obrigatórios
const person = { firstName: "Cauã", lastName: "Silva" };
const person2 = { firstName: "Césa" };
greeting(person);
greeting(person2);
// union type: permite determinar dois tipos a um dado
function showBalance(balance) {
    console.log(`Saldo atual: R$${balance}`);
}
showBalance(100);
showBalance("400");
function showId(id) {
    console.log(`O id é ${id}`);
}
showId(1);
showId("4");
function showCoords(obj) {
    console.log(`x: ${obj.x} y:${obj.y} z:${obj.z}`);
}
const objCoord = { x: 10, y: 15, z: 20 };
showCoords(objCoord);
// literal types: restringe uma variável a certos valores
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
showDirection("right");
// non null assertion operator: evita erros por valores que não estão disponíveis
// no momento do código mas que serão preenchidos, como manipulação de elementos do DOM
const title = document.querySelector("h1");
console.log(title.innerText);
// bigint
let n;
n = 1000n;
console.log(n);
// symbol: cria uma referência única para um valor
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
