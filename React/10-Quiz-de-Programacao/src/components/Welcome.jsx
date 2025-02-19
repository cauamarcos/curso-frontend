import Emoji from "../images/thinking-face.png";
import "./Welcome.css";
import { useContext } from "react";
import { QuizContext } from "../context/Quiz";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para iniciar:</p>
            <button onClick={() => dispatch({ type: "change_state" })}>Iniciar</button>
            <img src={Emoji} alt="Thinking-face emoji" />
        </div>
    );
};

export default Welcome;
