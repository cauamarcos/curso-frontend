// Number

console.log(typeof 2);
console.log(typeof 5.4);
console.log(typeof -10);

// Operações aritméticas

console.log(2 + 4);
console.log(2 - 4);
console.log(2 * 4);
console.log(2 / 4);

// Special numbers

console.log(1 / 0);
console.log(-1 / 0);
console.log("quatro" / "dois"); //NaN - Not a Number

// String

console.log(typeof "teste");
console.log(`texto \n \n`);
console.log('\tMais um texto');

// Concatenação

console.log("quatro" + " + " + "dois");

// Template strings (interpolação)

console.log(`A soma de 2 + 2 é ${2 + 2}`);

// Booleanos

console.log(5 > 20);
console.log(5 < 20);

// Comparações

console.log(10 == 10);
console.log(10 != 10);

// Idêntico: serve para diferenciar tipos com valores iguais

console.log(10 === "10");
console.log(10 + "10");
console.log(10 !== "10");

// Operadores lógicos

console.log(true && false);
console.log(false || false);
console.log(!false);

// Empty values

console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined); // undefined é associado a erros

// mudança de tipos: não deve ocorrer (erro)

console.log(5 * null);
console.log("10" + 1);
console.log("10" - 1);