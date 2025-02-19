import { useTimerContext } from "../hooks/useTimerContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Form.css";

const Form = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [color, setColor] = useState();

    const { setEvent } = useTimerContext();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const eventObject = {
            title,
            date,
            image,
            color,
        };

        setEvent(eventObject);

        navigate("/timer");
    };

    return (
        <div>
            <h1>Monte sua contagem regressiva!</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input type="text" name="title" placeholder="Digite o título do evento" required onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="data">Data do evento:</label>
                    <input type="date" name="date" required onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="image">Imagem:</label>
                    <input type="text" name="image" placeholder="Insira a URL da imagem" onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="color">Cor do tema:</label>
                    <input type="color" name="color" onChange={(e) => setColor(e.target.value)} />
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};

export default Form;
