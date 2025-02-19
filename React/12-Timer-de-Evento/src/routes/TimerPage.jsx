import Timer from "../components/Timer";
import useTimer from "../hooks/useTimer";
import { useTimerContext } from "../hooks/useTimerContext";
import { Navigate } from "react-router-dom";

import "./TimerPage.css";

const TimerPage = () => {
    const { event } = useTimerContext();

    if (!event) return <Navigate to="/" />;
    // importante para retornar para a página incial ao recarregar já que o contexto é perdido

    const [day, hour, minute, second] = useTimer(event.date);

    return (
        <div className="timer-page">
            <h1 style={{ color: event.color }}>{event.title}</h1>
            <div className="timer-container">
                <Timer title="Dias" number={day} eventColor={event.color}></Timer>
                <Timer title="Horas" number={hour} eventColor={event.color}></Timer>
                <Timer title="Minutos" number={minute} eventColor={event.color}></Timer>
                <Timer title="Segundos" number={second} eventColor={event.color}></Timer>
            </div>
        </div>
    );
};

export default TimerPage;
