let x: number = 10;
let y: number = 16.9865;
// o tipo number serve para inteiros e ponto flutuantes

console.log(x);
console.log(typeof y);
console.log(y.toFixed(3));

const firstName: string = "Cauã";
let a:boolean = true

console.log(firstName.toUpperCase(), a);

// type annotation: definição manual de um tipo de dado
// type inference: identificação de um tipo de dado pelo próprio TS

// para acessar o arquivo de configuração do TS, podemos usar o comando tsc --init
// para compilar automaticamente o TS, podemos usar o comando tsc -w