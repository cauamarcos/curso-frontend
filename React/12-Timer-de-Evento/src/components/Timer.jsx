import "./Timer.css";

const Timer = ({ title, number, eventColor }) => {
    return (
        <div className="timer">
            <p className="timer-number" style={{backgroundColor: eventColor}}>{number}</p>
            <h3 className="timer-text" style={{color: eventColor}}>{title}</h3>
        </div>
    );
};

export default Timer;
