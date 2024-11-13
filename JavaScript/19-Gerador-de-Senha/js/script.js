// Seleções
const helpGeneratePassBtn = document.querySelector("#help-generate-password");
const generateOptions = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const generatePasswordBtn = document.querySelector("#generate-password");
const passwordBox = document.querySelector("#password-box");
const generatedPassword = document.querySelector("#generated-password");
const copyPasswordBtn = document.querySelector("#copy-password");

// Funções
function getLowerCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Math.random retorna um float entre 0 e 1

function getUpperCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
    return Math.floor(Math.random() * 10).toString();
}

function getSymbol() {
    const symbols = "(){}[]=+-_*&%$#@!,.<>:;/?";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    let generatingPassword = "";
    const passwordLength = lengthInput.value;

    for(i = 0; i < passwordLength; i++) {
        const generators = [];

        if(lettersInput.checked)
            generators.push(getLowerCaseLetter(), getUpperCaseLetter());

        if(numbersInput.checked)
            generators.push(getNumber());

        if(symbolsInput.checked)
            generators.push(getSymbol());

        if(generators.length === 0)
            return;

        let randomValue = generators[Math.floor(Math.random() * generators.length)];

        generatingPassword += randomValue;
    }

    generatedPassword.innerText = generatingPassword;
};

// Eventos
helpGeneratePassBtn.addEventListener("click", () => {
    generateOptions.classList.toggle("hide");

    if(generateOptions.classList.contains("hide"))
        passwordBox.classList.add("hide");
});

generatePasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();

    generatePassword();

    if(generatedPassword.innerText.length !== 0)
        passwordBox.classList.remove("hide");
});

copyPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const password = generatedPassword.innerText;
    // copiando a senha para o ctrl+C
    navigator.clipboard.writeText(password).then(() => {
        copyPasswordBtn.innerText = "Senha copiada!";

        setTimeout(() => {
            copyPasswordBtn.innerText = "Copiar";
        }, 1000);
    });
});