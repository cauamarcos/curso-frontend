import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { useForm } from "./hooks/useForm";
import { useState } from "react";

import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

import "./App.css";

type FormFields = {
    name: string;
    email: string;
    review: string;
    comment: string;
};

const formTemplate: FormFields = {
    name: "",
    email: "",
    review: "",
    comment: "",
};

function App() {
    const [data, setData] = useState(formTemplate);

    const updateFieldHandler = (key: string, value: string) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const formComponents = [
        <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
        <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
        <Thanks data={data} />,
    ];

    const { changeStep, currentComponent, currentStep, isLastStep } = useForm(formComponents);

    return (
        <div className="app">
            <div id="header">
                <h2>Deixe sua avaliação</h2>
                <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto</p>
            </div>
            <div id="form-container">
                <Steps currentStep={currentStep} />
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <div id="inputs-container">{currentComponent}</div>
                    <div id="actions">
                        <button type="button" onClick={() => changeStep(currentStep - 1)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>
                        {!isLastStep ? (
                            <button type="submit">
                                <span>Avançar</span>
                                <GrFormNext />
                            </button>
                        ) : (
                            <button type="button">
                                <span>Enviar</span>
                                <FiSend />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
