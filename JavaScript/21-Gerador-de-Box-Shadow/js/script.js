class BoxShadowGenerator {

    constructor(horizontalInput, horizontal, verticalInput, vertical, BlurInput, Blur, spreadInput, spread, colorInput, color, opacityInput, opacity, insetInput, previewBox, rule) {
        this.horizontalInput = horizontalInput;
        this.horizontal = horizontal;
        this.verticalInput = verticalInput;
        this.vertical = vertical;
        this.BlurInput = BlurInput;
        this.Blur = Blur;
        this.spreadInput = spreadInput;
        this.spread = spread;
        this.colorInput = colorInput;
        this.color = color;
        this.colorR = 0;
        this.colorG = 0;
        this.colorB = 0;
        this.opacityInput = opacityInput;
        this.opacity = opacity;
        this.insetInput = insetInput;
        this.previewBox = previewBox;
        this.rule = rule;
    }

    initialize() {
        this.horizontal.value = this.horizontalInput.value;
        this.vertical.value = this.verticalInput.value;
        this.Blur.value = this.BlurInput.value;
        this.spread.value = this.spreadInput.value;
        this.color.value = this.colorInput.value;
        this.opacity.value = this.opacityInput.value;

        this.applyRule();
        this.showRule();
    }

    applyRule() {
        this.previewBox.style.boxShadow = `rgba(${this.colorR}, ${this.colorG}, ${this.colorB}, ${this.opacity.value}) ${this.horizontal.value}px ${this.vertical.value}px ${this.Blur.value}px ${this.spread.value}px ${this.inset ? "inset" : ""}`;

        this.currentRule = this.previewBox.style.boxShadow;
    }

    showRule() {
        this.rule.innerText = this.currentRule;
    }

    updateValue(type, value) {

        switch(type) {
            case "horizontal":
                this.horizontal.value = value;
                break;
            case "vertical":
                this.vertical.value = value;
                break;
            case "Blur":
                this.Blur.value = value;
                break;
            case "spread":
                this.spread.value = value;
                break;
            case "color":
                this.colorR = parseInt(value.slice(1, 3), 16);
                this.colorG = parseInt(value.slice(3, 5), 16);
                this.colorB = parseInt(value.slice(5, 7), 16);

                this.color.value = value;
                break;
            case "opacity":
                this.opacity.value = value;
                break;
            case "inset":
                this.inset = value;
                break;
        }

        this.applyRule();
        this.showRule();
    }
}

// Seleções
const horizontalInput = document.querySelector("#horizontal");
const horizontal = document.querySelector("#horizontal-value");
const verticalInput = document.querySelector("#vertical");
const vertical = document.querySelector("#vertical-value");
const BlurInput = document.querySelector("#Blur");
const Blur = document.querySelector("#Blur-value");
const spreadInput = document.querySelector("#spread");
const spread = document.querySelector("#spread-value");
const colorInput = document.querySelector("#color");
const color = document.querySelector("#color-value");
const opacityInput = document.querySelector("#opacity");
const opacity = document.querySelector("#opacity-value");
const insetInput = document.querySelector("#inset");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");

const generatedRule = document.querySelector("#generated-rule #rule");
const tip = document.querySelector("#tip");

const boxShadow = new BoxShadowGenerator(horizontalInput, horizontal, verticalInput, vertical, BlurInput, Blur, spreadInput, spread, colorInput, color, opacityInput, opacity, insetInput, previewBox, rule);

// Eventos
horizontalInput.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("horizontal", value);
});

verticalInput.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("vertical", value);
});

BlurInput.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("Blur", value);
});

spreadInput.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("spread", value);
});

colorInput.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("color", value);
});

opacityInput.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("opacity", value);
});

insetInput.addEventListener("input", (e) => {
    const value = e.target.checked;

    boxShadow.updateValue("inset", value);
});

generatedRule.addEventListener("click", () => {
    navigator.clipboard.writeText(generatedRule.innerText).then(() => {
        tip.innerText = "Regra copiada!";

        setTimeout(() => {
            tip.innerText = "Clique no quadro acima para copiar a regra";
        }, 1000);
    });
});

// Inicialização
boxShadow.initialize();