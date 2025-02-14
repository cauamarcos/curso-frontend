import { use, useState } from "react";
import Button from "./Button";
import "./ImcCalculator.css";

const ImcCalculator = ({ calculateImc }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    };

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    };

    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setHeight(updatedValue);
    };

    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value);

        setWeight(updatedValue);
    };

    return (
        <div id="container">
            <h1>Calculadora de IMC</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" id="height" placeholder="Exemplo 1,75" onChange={(e) => handleHeightChange(e)} value={height} />
                </div>

                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight" placeholder="Exemplo 70,5" onChange={(e) => handleWeightChange(e)} value={weight} />
                </div>

                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={(e) => calculateImc(e, height, weight)}></Button>
                    <Button id="clear-btn" text="Limpar" action={clearForm}></Button>
                </div>
            </form>
        </div>
    );
};

export default ImcCalculator;
