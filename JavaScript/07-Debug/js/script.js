// strict: modo de desenvolvimento mais rigoroso

"use strict";

opa = "abc"; // no terminal, é acusado um erro no modo strict

debugger; /* ao chegar nesse ponto, a execução é pausada e é possível 
verificar valores de variáveis para garantir que a execução esteja 
prosseguindo da maneira desejada */

// tratamento de dados

function checkNumber(n) {
    const result = Number(n);

    if(Number.isNaN(result)) {
        console.log("Valor incorreto!");
        return;
    }
    console.log("Valor correto!");
    return result;
};

checkNumber(5);
checkNumber("5");
checkNumber("a");

// exception

let x = false;

if(!x) {
    throw new Error("X é falso!");
}

// try catch finally

let a = 1;

try {
    const soma = a + b;
}
catch(error) {
    console.log(`Erro no programa: ${error}`);
}
finally {
    console.log("O código foi executado!");
}

// assertion: serve para o programador

function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error("O array precisa ter elementos!")
    }
    else {
        console.log(`O array tem ${arr.length} elementos!`)
    }
};
checkArray([]);