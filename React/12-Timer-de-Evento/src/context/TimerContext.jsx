import { createContext, useState } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
    const [event, setEvent] = useState();

    return <TimerContext.Provider value={{event, setEvent}}>{children}</TimerContext.Provider>;
};
