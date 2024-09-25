// Seleções
const proBtn = document.querySelector("#pro");
const proMaxBtn = document.querySelector("#pro-max");

const colorDesert = document.querySelector("#desert");
const colorNatural = document.querySelector("#natural");
const colorWhite = document.querySelector("#white");
const colorBlack = document.querySelector("#black");

const hoverColor = document.querySelector("#hover-color");

var colors = false;
var colorSelected = false;

const storage128 = document.querySelector("#storage128");
const storage256 = document.querySelector("#storage256");
const storage512 = document.querySelector("#storage512");
const storage1024 = document.querySelector("#storage1024");
const helpStorage = document.querySelector("#help-storage");

const image = document.querySelector("#image");
const imageSide = document.querySelector("#image-side");

const price = document.querySelector("#price");
const price128 = document.querySelector("#price128");
const price256 = document.querySelector("#price256");
const price512 = document.querySelector("#price512");
const price1024 = document.querySelector("#price1024");

const pricePro128 = "R$ 10.499,00";
const pricePro256 = "R$ 11.299,00";
const priceProMax256 = "R$ 12.499,00";
const pricePro512 = "R$ 12.799,00";
const priceProMax512 = "R$ 13.999,00";
const pricePro1024 = "R$ 14.299,00";
const priceProMax1024 = "R$ 15.499,00";

// Funções
function enableColors() {
    colorDesert.classList.remove("disable");
    colorNatural.classList.remove("disable");
    colorWhite.classList.remove("disable");
    colorBlack.classList.remove("disable");
    colors = true;
}

function enableStorage() {
    storage128.classList.remove("disable");
    storage256.classList.remove("disable");
    storage512.classList.remove("disable");
    storage1024.classList.remove("disable");
    helpStorage.classList.remove("disable");
    helpStorage.classList.add("able");
    colorSelected = true;
}

function proPricing() {
    price128.innerText = pricePro128;
    price256.innerText = pricePro256;
    price512.innerText = pricePro512;
    price1024.innerText = pricePro1024;
}

function proMaxPricing() {
    price256.innerText = priceProMax256;
    price512.innerText = priceProMax512;
    price1024.innerText = priceProMax1024;
}

// Eventos - Modelos
proBtn.addEventListener("click", () => {
    if(!colors) {
        imageSide.classList.add("center");
        image.classList.add("all-colors");
        enableColors();
    }
    image.classList.add("pro");
    image.classList.remove("pro-max");

    proBtn.classList.add("selected");
    proMaxBtn.classList.remove("selected");

    if(colorDesert.classList.contains("selected"))
        image.src = "img/iphone16-pro-deserttitanium.webp";
    else if(colorNatural.classList.contains("selected"))
        image.src = "img/iphone16-pro-naturaltitanium.webp";
    else if(colorWhite.classList.contains("selected"))
        image.src = "img/iphone16-pro-whitetitanium.webp";
    else if(colorBlack.classList.contains("selected"))
        image.src = "img/iphone16-pro-blacktitanium.webp";
    else
        image.src = "img/iphone16-pro-colors.webp";

    if(storage128.classList.contains("hide"))
        storage128.classList.remove("hide");

    if(storage128.classList.contains("selected"))
        price.innerText = pricePro128;
    else if(storage256.classList.contains("selected"))
        price.innerText = pricePro256;
    else if(storage512.classList.contains("selected"))
        price.innerText = pricePro512;
    else if(storage1024.classList.contains("selected"))
        price.innerText = pricePro1024;
    else
        price.innerText = "A partir de R$ 10.499";

    if(colorSelected)
        proPricing();
    else {
        price128.innerText = "A partir de R$ 10.499"
        price256.innerText = "A partir de R$ 11.299";
        price512.innerText = "A partir de R$ 12.799";
        price1024.innerText = "A partir de R$ 14.299";
    }
});

proMaxBtn.addEventListener("click", () => {
    if(!colors) {
        image.src = "img/iphone16-pro-max-colors.webp";
        imageSide.classList.add("center");
        image.classList.add("all-colors");
        enableColors();
    }
    image.classList.remove("pro");
    image.classList.add("pro-max");

    proBtn.classList.remove("selected");
    proMaxBtn.classList.add("selected");

    if(colorDesert.classList.contains("selected"))
        image.src = "img/iphone16-pro-max-deserttitanium.webp";
    else if(colorNatural.classList.contains("selected"))
        image.src = "img/iphone16-pro-max-naturaltitanium.webp";
    else if(colorWhite.classList.contains("selected"))
        image.src = "img/iphone16-pro-max-whitetitanium.webp";
    else if(colorBlack.classList.contains("selected"))
        image.src = "img/iphone16-pro-max-blacktitanium.webp";
    else
        image.src = "img/iphone16-pro-max-colors.webp";

    if(!storage128.classList.contains("hide"))
        storage128.classList.add("hide");

    if(storage128.classList.contains("selected"))
        storage128.classList.remove("selected");

    if(storage256.classList.contains("selected"))
        price.innerText = priceProMax256;
    else if(storage512.classList.contains("selected"))
        price.innerText = priceProMax512;
    else if(storage1024.classList.contains("selected"))
        price.innerText = priceProMax1024;
    else
        price.innerText = "A partir de R$ 12.499";

    if(colorSelected) {
        proMaxPricing();
    }
    else {
        price256.innerText = "A partir de R$ 12.499";
        price512.innerText = "A partir de R$ 13.999";
        price1024.innerText = "A partir de R$ 15.499";
    }
});

// Cores
colorDesert.addEventListener("click", () => {
    if(colors) {
        colorDesert.classList.add("selected");
        colorNatural.classList.remove("selected");
        colorWhite.classList.remove("selected");
        colorBlack.classList.remove("selected");

        if(proBtn.classList.contains("selected")) {
            image.src = "img/iphone16-pro-deserttitanium.webp";
            proPricing();
        }
        else {
            image.src = "img/iphone16-pro-max-deserttitanium.webp";
            proMaxPricing();
        }

        enableStorage();

        image.classList.remove("all-colors");

        hoverColor.innerText = " - Titânio-deserto";
    }
});

colorNatural.addEventListener("click", () => {
    if(colors) {
        colorDesert.classList.remove("selected");
        colorNatural.classList.add("selected");
        colorWhite.classList.remove("selected");
        colorBlack.classList.remove("selected");

        if(proBtn.classList.contains("selected")) {
            image.src = "img/iphone16-pro-naturaltitanium.webp";
            proPricing();
        }
        else {
            image.src = "img/iphone16-pro-max-naturaltitanium.webp";
            proMaxPricing();
        }

        enableStorage();

        image.classList.remove("all-colors");

        hoverColor.innerText = " - Titânio natural";
    }
});

colorWhite.addEventListener("click", () => {
    if(colors) {
        colorDesert.classList.remove("selected");
        colorNatural.classList.remove("selected");
        colorWhite.classList.add("selected");
        colorBlack.classList.remove("selected");

        if(proBtn.classList.contains("selected")) {
            image.src = "img/iphone16-pro-whitetitanium.webp";
            proPricing();
        }
        else {
            image.src = "img/iphone16-pro-max-whitetitanium.webp";
            proMaxPricing();
        }

        enableStorage();

        image.classList.remove("all-colors");

        hoverColor.innerText = " - Titânio branco";
    }
});

colorBlack.addEventListener("click", () => {
    if(colors) {
        colorDesert.classList.remove("selected");
        colorNatural.classList.remove("selected");
        colorWhite.classList.remove("selected");
        colorBlack.classList.add("selected");

        if(proBtn.classList.contains("selected")) {
            image.src = "img/iphone16-pro-blacktitanium.webp";
            proPricing();
        }
        else {
            image.src = "img/iphone16-pro-max-blacktitanium.webp";
            proMaxPricing();
        }

        enableStorage();

        image.classList.remove("all-colors");

        hoverColor.innerText = " - Titânio preto";
    }
});

var colorSelectedName;

colorDesert.addEventListener("mouseover", () => {
    if(colors) {
        colorSelectedName = hoverColor.innerText;
        hoverColor.innerText = " - Titânio-deserto";
    }
});
colorDesert.addEventListener("mouseout", () => {
    if(!colorDesert.classList.contains("selected") && colorSelectedName !== undefined)
        hoverColor.innerText = colorSelectedName;
})

colorNatural.addEventListener("mouseover", () => {
    if(colors){
        colorSelectedName = hoverColor.innerText;
        hoverColor.innerText = " - Titânio natural";
    }
});
colorNatural.addEventListener("mouseout", () => {
    if(!colorNatural.classList.contains("selected") && colorSelectedName !== undefined)
        hoverColor.innerText = colorSelectedName;
})

colorWhite.addEventListener("mouseover", () => {
    if(colors){
        colorSelectedName = hoverColor.innerText;
        hoverColor.innerText = " - Titânio branco";
    }
});
colorWhite.addEventListener("mouseout", () => {
    if(!colorWhite.classList.contains("selected") && colorSelectedName !== undefined)
        hoverColor.innerText = colorSelectedName;
})

colorBlack.addEventListener("mouseover", () => {
    if(colors){
        colorSelectedName = hoverColor.innerText;
        hoverColor.innerText = " - Titânio preto";
    }
});
colorBlack.addEventListener("mouseout", () => {
    if(!colorBlack.classList.contains("selected") && colorSelectedName !== undefined)
        hoverColor.innerText = colorSelectedName;
})

// Armazenamento
storage128.addEventListener("click", () => {
    if(colorSelected) {
        storage128.classList.add("selected");
        storage256.classList.remove("selected");
        storage512.classList.remove("selected");
        storage1024.classList.remove("selected");

        price.innerText = pricePro128;
    }
});

storage256.addEventListener("click", () => {
    if(colorSelected) {
        storage128.classList.remove("selected");
        storage256.classList.add("selected");
        storage512.classList.remove("selected");
        storage1024.classList.remove("selected");

        if(proBtn.classList.contains("selected"))
            price.innerText = pricePro256;
        else
            price.innerText = priceProMax256;
    }
});

storage512.addEventListener("click", () => {
    if(colorSelected) {
        storage128.classList.remove("selected");
        storage256.classList.remove("selected");
        storage512.classList.add("selected");
        storage1024.classList.remove("selected");

        if(proBtn.classList.contains("selected"))
            price.innerText = pricePro512;
        else
            price.innerText = priceProMax512;
    }
});

storage1024.addEventListener("click", () => {
    if(colorSelected) {
        storage128.classList.remove("selected");
        storage256.classList.remove("selected");
        storage512.classList.remove("selected");
        storage1024.classList.add("selected");

        if(proBtn.classList.contains("selected"))
            price.innerText = pricePro1024;
        else
            price.innerText = priceProMax1024;
    }
});
