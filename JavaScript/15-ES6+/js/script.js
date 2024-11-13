// var, let e const
// Enquanto let e const tem seus escopos respeitados, o mesmo não ocorre com var
var x = 10;
var y = 15;

if(y > 10) {
    var x = 5;
    console.log(x);
}
console.log(x);

let a = 10;
let b = 15;

if(b > 10) {
    let a = 5;
    console.log(a);
}
console.log(a);

function logName() {
    const name = "César";
    console.log(name);
}
logName();

const name = "Cauã";
console.log(name);

// arrow function
const user = {
    name: "Lucas",
    sayUserName() {
        setTimeout( function() {
            console.log(this); // aqui o this se refere ao objeto pai
            console.log(`Username: ${this.name}`); // template literals
        }, 1000);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this); // aqui, por ser arrow function, o this se refere ao próprio objeto
            console.log(`Username: ${this.name}`);
        }, 2000);
    },
};

user.sayUserName();
user.sayUserNameArrow();

// filter
const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
    if(n > 3) return n;
})
console.log(highNumbers);

// map: usado para alterar um array original
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira elétrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 479, category: "Eletro"},
    {name: "Calça", price: 87.99, category: "Roupas"},
];

products.map((product) => {
    if(product.category === "Roupas")
        product.onSale = true;
});

console.log(products);

// destructuring: desestrutura dados complexos em várias variáveis
const fruits = ["Manga", "Maçã", "Banana"];

const [f1, f2, f3] = fruits;
console.log(f1, f3);

// spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a3, 7];
console.log(a4);

const carName = {name: "Gol"};
const carBrand = {brand: "VW"};
const otherInfos = {km: 100000, price: 50000};

const car = {...carName, ...carBrand, ...otherInfos};
console.log(car);

// classes
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100); 
    }
}

const shirt = new Product("Camisa Gola V", 30);
console.log(shirt.productWithDiscount(10));

// herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Chapéu", 20, ["Preto", "Vermelho", "Azul"]);
console.log(hat);
hat.showColors();