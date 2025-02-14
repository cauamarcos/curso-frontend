import "./Steps.css";
import { GoPerson, GoStar } from "react-icons/go";
import { FiSend } from "react-icons/fi";

const Steps = ({ currentStep }) => {
    return (
        <div id="steps">
            <div className="step active">
                <GoPerson />
                <p>Identificação</p>
            </div>
            <div className={`step ${currentStep >= 1 ? "active": ""}`}>
                <GoStar />
                <p>Avaliação</p>
            </div>
            <div className={`step ${currentStep >= 2 ? "active": ""}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    );
};

export default Steps;
