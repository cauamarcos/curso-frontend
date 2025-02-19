import { useContext } from "react";
import { QuizContext } from "../context/Quiz";

import LanguagesLogos from "../images/languages-logos.png";

import "./PickCategory.css";

const PickCategory = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const chooseCategoryAndReorderQuestions = (category) => {
        dispatch({ type: "start_game", payload: category });

        dispatch({ type: "reorder_questions" });
    };

    return (
        <div id="category">
            <h2>Escolha uma categoria</h2>
            <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
            <div id="buttons">
                {quizState.questions.map((question) => (
                    <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>
                        {question.category}
                    </button>
                ))}
            </div>
            <img src={LanguagesLogos} alt="Logos das linguages HTML, CSS e JS" />
        </div>
    );
};

export default PickCategory;
