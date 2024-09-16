const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);
console.log(lista.length); // = lista["length"]

// métodos

const text = "algum texto";

console.log(text.toUpperCase());
console.log(text.indexOf("g"));

// objetos

const person = {
    name: "Cauã",
    age: 20,
    job: "Front-end developer"
}

person.weight = 80;
delete person.age;

console.log(person);

const person2 = {
    c: []
}

Object.assign(person2, person); // cópia de propriedades de objeto

console.log(person2);

// obtendo as propriedades dos objetos

console.log(Object.keys(person2));
console.log(Object.entries(person));

// mutação

const person3 = person; // person3 é uma referência a person, logo qualquer modificação de um, também altera o outro

// percorrendo array com loop

for(let i = 0; i < lista.length; i++) 
    console.log(lista[i]);

// push e pop

lista.push(6); // adiciona no fim
lista.pop(); // retorna o item removido

// shift e unshift

lista.unshift(6, 4); // adiciona no inicio
lista.shift(); // remove o primeiro

// indexOf e lastIndexOf

console.log(lista);
console.log(lista.lastIndexOf(4));
console.log(lista.indexOf(6));

// slice

const subLista = lista.slice(1, 3); // extrai os elementos do índice 1 ao 2
console.log(subLista);

// foreach

lista.forEach((n) => {
    console.log(n);
})

// includes: verifica se o array contém o parâmetro

console.log(lista.includes(4));

// reverse: inverte os elementos do array original

console.log(lista.reverse());

// métodos em strings

const nome = " Cauã Marcos\n\n";
console.log(nome);
console.log(nome.trim()); // remove tudo que não é texto na string, não modifica a string original

const n = "1";
console.log(n.padStart(3, "0")); // adiciona 3 "0" ao início da string
console.log(n.padEnd(3, "0")); // adiciona 3 "0" ao final da string

const array = nome.split(" "); // separa os elementos da string em um array com base em um separador (parâmetro)
console.log(array);
console.log(array.join(" ")); // une os elementos de um array em string também com base em um separador

console.log(nome.repeat(3));

const somaInfinita = (...args) => { // rest operator
    let total = 0;

    for(let i = 0; i < args.length; i++)
        total += args[i];

    return total;
};
console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7));

const somaInfinita2 = (...args) => {
    let total = 0;

    for(num of args) // for...of: pega cada elemento do array
        total += num;

    return total;
};
console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7));

// destructuring em objetos

const userDetails = {
    firstName: "Cauã",
    lastName: "Silva",
    age: 20,
};

const {firstName: primeiroNome, lastName, age} = userDetails;
console.log(primeiroNome, lastName, age);

// destructuring em array

const myList = [1, 2, 3];

const [primeiro, segundo, terceiro] = myList;
console.log(primeiro, segundo, terceiro);

// JSON

const myJson = '{"name": "Cauã", "age": 20}'

const myObject = JSON.parse(myJson); // converte JSON em objeto
console.log(myObject);

myObject.job = "Front-end Developer";

const myNewJson = JSON.stringify(myObject); // converte o objeto em JSON (string)
console.log(typeof myNewJson);
