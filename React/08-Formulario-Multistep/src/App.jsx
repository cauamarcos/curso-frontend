// Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

// Hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

import "./App.css";

const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
};

function App() {
    const [data, setData] = useState(formTemplate);

    const updateFieldHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const formComponents = [
        <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
        <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
        <Thanks data={data} />,
    ];

    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

    return (
        <>
            <div id="header">
                <h1>Deixe sua avaliação</h1>
                <p>Queremos saber mais sobre sua experiência de compra</p>
            </div>
            <div id="form-container">
                <Steps currentStep={currentStep} />
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <div id="inputs-container">{currentComponent}</div>
                    <div id="actions">
                        {!isFirstStep && (
                            <button type="button" onClick={() => changeStep(currentStep - 1)}>
                                <GrFormPrevious />
                                <span>Voltar</span>
                            </button>
                        )}
                        {!isLastStep ? (
                            <button type="submit">
                                <GrFormNext />
                                <span>Avançar</span>
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={(e) => {
                                    changeStep(0, e);
                                    updateFieldHandler("name", "");
                                    updateFieldHandler("email", "");
                                    updateFieldHandler("review", "");
                                    updateFieldHandler("comment", "");
                                }}
                            >
                                <span>Enviar</span>
                                <FiSend />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;
