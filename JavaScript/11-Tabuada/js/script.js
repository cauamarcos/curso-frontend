// Seleção de elementos
const multiplicatioinForm = document.querySelector("#multiplication-form");
const number = document.querySelector("#number");
const multiplicator = document.querySelector("#multiplicator");

const title = document.querySelector("#multiplication-title span");
const table = document.querySelector("#multiplication-operations");

// Funções
const createTable = (number, multiplicator) => {
    table.innerHTML = "";

    for(i = 1; i <= multiplicator; i++) {
        const result = number * i;

        const template = `
        <div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>
        `
        // transformando a string template em HTML
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");

        // adicionando a linha à tabela a cada loop
        const row = htmlTemplate.querySelector(".row");
        table.appendChild(row);
    }

    title.innerText = number;
}

// Eventos
multiplicatioinForm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que a página seja recarregada

    const multiplicationNumber = +number.value;
    const multiplicatorNumber = +multiplicator.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
})
