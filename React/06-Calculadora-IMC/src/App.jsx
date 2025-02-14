import "./App.css";
import { data } from "./data/data.js";
import { useState } from "react";
import ImcCalculator from "./components/ImcCalculator";
import ImcTable from "./components/ImcTable.jsx";

function App() {
    const [imc, setImc] = useState("");
    const [info, setInfo] = useState("");
    const [infoClass, setInfoClass] = useState("");

    const calculateImc = (e, height, weight) => {
        e.preventDefault();

        if (!height || !weight) return;

        const heightFloat = +height.replace(",", ".");
        const weightFloat = +weight.replace(",", ".");

        const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

        setImc(imcResult);

        data.forEach((item) => {
            if (imcResult >= item.min && imcResult <= item.max) {
                setInfo(item.info);
                setInfoClass(item.infoClass);
            }
        });

        if (!info) return;
    };

    const resetCalculator = (e) => {
        e.preventDefault();

        setImc("");
        setInfo("");
        setInfoClass("");
    };

    return (
        <>
            <div className="container">
                {!imc ? <ImcCalculator calculateImc={calculateImc} /> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalculator={resetCalculator} />}
            </div>
        </>
    );
}

export default App;
