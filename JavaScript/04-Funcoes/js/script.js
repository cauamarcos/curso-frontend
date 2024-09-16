// criando uma função

function minhaFuncao(txt) {
    console.log(txt);
}
minhaFuncao("Teste");

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável!");
}
minhaFuncaoEmVariavel();

function soma(a, b) {
    return a + b;
}
const resultado = soma(1, 2);
console.log(resultado);


// escopo aninhado: cada bloco tem seu próprio escopo

let x = 10;

function escopoAninhado() {
    let x = 20;

    if(true) {
        let x = 30;

        if(true) {
            let x = 40;
            console.log(x);
        }

        console.log(x);
    }

    console.log(x);
}

escopoAninhado();

console.log(x);

// arrow function

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par");
        return;
    }
    else {
        console.log("Ímpar");
        return;
    }
}
parOuImpar(5);

const triplicar = (n) => n * 3;

console.log(triplicar(4));

// parâmetro opcional: basta verificar se um parâmetro é undefined

const greeting = (name) => {

    if(!name) {
        console.log("Olá!");
        return;
    }
    console.log(`Olá, ${name}!`);
}

greeting();
greeting("Cauã");

// usando valor default

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text);
    }
}
repeatText("Oi", 10);

// closure: serve para salvar um valor retornado

const multiplicationClosure = (n) => {
    return(m) => {
        return n * m;
    }
}

const c1 =  multiplicationClosure(5);
console.log(c1);
console.log(c1(5));

// recursão

const fatorial = (n) => {
    if(n === 0)
        return 1;
    else
        return n * fatorial(n - 1);
}

console.log(fatorial(6));
