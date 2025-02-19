import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

export const useTimerContext = () => {
    const context = useContext(TimerContext);

    if (!context) {
        console.log("Contexto não encontrado");
        return;
    }

    return context;
};
