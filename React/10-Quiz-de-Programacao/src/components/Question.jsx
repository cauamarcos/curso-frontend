import { useContext } from "react";
import { QuizContext } from "../context/Quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
        dispatch({
            type: "check_answer",
            payload: { answer: currentQuestion.answer, option },
        });
    };

    return (
        <div className="question">
            <p>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option
                        option={option}
                        key={option}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                        hide={quizState.optionToHide === option ? "hide" : null}
                    />
                ))}
            </div>
            {!quizState.answerSelected && !quizState.help && (
                <>
                    {currentQuestion.tip && <button onClick={() => dispatch({ type: "show_tip" })}>Dica</button>}
                    <button onClick={() => dispatch({ type: "remove_option" })}>Excluir uma</button>
                </>
            )}
            {!quizState.answerSelected && quizState.help === "tip" && <p>{currentQuestion.tip}</p>}
            {quizState.answerSelected && <button onClick={() => dispatch({ type: "change_question" })}>Continuar</button>}
        </div>
    );
};

export default Question;
