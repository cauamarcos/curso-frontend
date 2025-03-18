// arrays
let numbers: number[] = [1, 2, 3];
const nums: Array<number> = [100, 200]; // sintaxe alternativa

numbers.push(4);
console.log(numbers[1]);

// tipo any: deve ser evitado ao máximo pois vai contra os princípios do TS
const arr1: any = [1, "dois", false, []];
let variavel: any = 2;
variavel = "quatro";

// tipos de parâmetros e retorno de funções
function soma(a: number, b: number): number {
    return a + b;
}

// função anônima
setTimeout(function () {
    const name: string = "César";
    console.log(name);
}, 2000);

// tipos de objetos + propriedade opcional
function greeting(fullName: { firstName: string; lastName?: string }) {
    if (fullName.lastName) console.log(`Olá ${fullName.firstName} ${fullName.lastName}`);
    else console.log(`Olá ${fullName.firstName}`);
}
// os parâmetros opcionais devem vir depois dos obrigatórios

const person = { firstName: "Cauã", lastName: "Silva" };
const person2 = { firstName: "Césa" };
greeting(person);
greeting(person2);

// union type: permite determinar dois tipos a um dado
function showBalance(balance: number | string) {
    console.log(`Saldo atual: R$${balance}`);
}

showBalance(100);
showBalance("400");

// type alias: simplifica o uso de union type
type ID = number | string;

function showId(id: ID) {
    console.log(`O id é ${id}`);
}

showId(1);
showId("4");

// interface: pode mudar ao longo do código, ao contrário do alias
interface Point3D {
    x: number;
    y: number;
}

interface Point3D {
    z: number;
}

function showCoords(obj: Point3D) {
    console.log(`x: ${obj.x} y:${obj.y} z:${obj.z}`);
}

const objCoord: Point3D = { x: 10, y: 15, z: 20 };
showCoords(objCoord);

// literal types: restringe uma variável a certos valores
function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é ${direction}`);
}

showDirection("right");

// non null assertion operator: evita erros por valores que não estão disponíveis
// no momento do código mas que serão preenchidos, como manipulação de elementos do DOM
const title = document.querySelector("h1");

console.log(title!.innerText);

// bigint
let n: bigint;
n = 1000n;
console.log(n);

// symbol: cria uma referência única para um valor
let symbolA: symbol = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
