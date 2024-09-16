// adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("Clicou!");
});

// removendo eventos
const secondBtn = document.querySelector("#btn");
const thirdBtn = document.querySelector("#other-btn");

function imprimirMensagem() {
    console.log("Teste!");
}

secondBtn.addEventListener("click", imprimirMensagem);
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido!");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// argumento do evento
const title = document.querySelector("#title");

title.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.offsetX);
    console.log(e.pointerType);
    console.log(e.target);
});

// evitando propagação
const btnContainer = document.querySelector("#btn-container");
const btnProp = document.querySelector("#btn-prop");

btnContainer.addEventListener("click", () => {
    console.log("Evento 1");
});

btnProp.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
});

// removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Evento padrão cancelado!")
});

// eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});
document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
});

// eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", (e) => {
    console.log("Pressionou o botão do mouse!");
});
mouseEvents.addEventListener("mouseup", (e) => {
    console.log("Soltou o botão do mouse!");
});
mouseEvents.addEventListener("dblclick", (e) => {
    console.log("Clique duplo!");
});

// movimento do mouse
document.addEventListener("mousemove", (e) => {
    console.log(`Posição (${e.x}, ${e.y})`);
});

// evento de scroll
window.addEventListener("scroll", (e) => {
    if(window.scrollY > 200);
        console.log("Você já desceu mais de 200px!");
});

// evento de focus/blur: usados ao clicar em um input ou sair dele
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input!");
});
input.addEventListener("blur", (e) => {
    console.log("Saiu do input!");
});

// eventos de carregamento
window.addEventListener("load", () => {
    console.log("A página carregou!")
})
window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
});

// debounce
const debounce = (f, delay) => {
    let timeout;

    return (...arguments) => {
        if(timeout)
            clearTimeout(timeout);

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};

window.addEventListener("mousemove", debounce(() => {
    console.log("Movimentando mouse");
}, 400));
