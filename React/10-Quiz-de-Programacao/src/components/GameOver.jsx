import { useContext } from "react";
import { QuizContext } from "../context/Quiz";

import CoolFace from "../images/cool-face.png";

import "./GameOver.css";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">
            <h2>Fim de Jogo!</h2>
            <p>
                Você acertou {quizState.score} de {quizState.questions.length} perguntas.
            </p>
            <img src={CoolFace} alt="Emoji estiloso" />
            <button onClick={() => dispatch({ type: "restart_game" })}>Reiniciar</button>
        </div>
    );
};

export default GameOver;
