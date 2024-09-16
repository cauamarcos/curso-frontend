// métodos

const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au");
    }
};

animal.latir();

// this

const pessoa = {
    nome: "Cauã",
    getNome: function() {
        return this.nome;
    },
    setNome: function(novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.getNome());

// prototype: herança automática da linguagem

const text = "abc";
console.log(Object.getPrototypeOf(text));

// cadeia de prototype

const pessoa2 = Object.create(pessoa);
console.log(pessoa2.nome);
console.log(Object.getPrototypeOf(pessoa2) === pessoa);

// classes básicas: objetos que servem de molde para criar outros

const cachorro = {
    raca: null,
    patas: 4,
};
const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão"

const bulldog = Object.create(cachorro);
pastorAlemao.raca = "Bulldog"

// função construtora

function criarCachorro(nome, raca) {
    
    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
};
const bob = criarCachorro("Bob", "Poodle");
console.log(bob);

// função como classe

function Cachorro(nome, raca) { // usando incial maiúscula a função já é tratada como classe
    this.nome = nome;
    this.raca = raca;
};
const husky = new Cachorro("Ozzy", "Husky");

// métodos na função construtora

Cachorro.prototype.uivar = function() {
    console.log("Auuuu");
};
husky.uivar();
console.log(Cachorro.prototype);

// classes es6

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}
const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(Object.getPrototypeOf(jeff));

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Esse caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");
scania.descreverCaminhao();

Caminhao.prototype.motor = 4.0;

console.log(scania.motor);

// override

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const caua = new Humano("Cauã", 20);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida"; // define um valor padrão

console.log(Humano.prototype.idade);

// symbol

const olhos = Symbol();
Humano.prototype[olhos] = 2;

console.log(caua[olhos]);

// herança

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
};

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super (patas, patas);
        this.nome = nome;
    }
}

const cesar = new Lobo(4, "César");
console.log(cesar);

// instaceOf: verfica se um objeto é uma instância de uma classe

console.log(cesar instanceof Mamifero);
console.log(cesar instanceof Lobo);
console.log(Lobo instanceof Mamifero);