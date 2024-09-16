// setTimeOut

console.log("Ainda não executou");

setTimeout(function() {
    console.log("Requisição assíncrona");
}, 2000); // o segundo parâmetro é o tempo em ms que deve esperar para executar

console.log("Ainda não executou 2");

// setInterval: funciona como um loop infinito com tempo definido entre cada execução

// setInterval(function() {
//     console.log("Intervalo assíncrono");
// }, 3000); // o segundo parâmetro é o tempo em ms entre cada execução

// Promise

const promessa = Promise.resolve(5 + 5);

promessa
    .then((value) => {
        console.log(`A soma é ${value}`);
        return value;
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`));

// tratando erro com promise

Promise.resolve(4 * "abc")
.then(n => {
    if(Number.isNaN(n))
        throw new Error("Valores inválidos!");
})
.catch((error) => console.log(`Ocorreu um erro: ${error}`));

// rejeitando promise

function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if(n > 10)
            resolve("O número é maior que 10")
        else
            reject(new Error("Número muito baixo"));
    })
};

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Ocorreu um erro: ${err}`));

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Ocorreu um erro: ${err}`));

// resolvendo várias promessas

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10);
    }, 1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if(30 > 10)
        resolve(30);
    else
        reject("Erro!");
});

Promise.all([p1, p2, p3]).then((v) => console.log(v)); // espera até que o resultado da mais lenta seja obtido

// async function: é uma modernização da promise, já que retorna promise

async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => console.log(`O valor da soma é ${value}`));

// async await

function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu a promise");
        }, 4000);
    });
}

async function chamadaAsync() {
    console.log("Chamando a promise e esperando o resultado")
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// generator: a cada execução há um valor diferente

function* generator() {
    yield 1;
    yield 2;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
