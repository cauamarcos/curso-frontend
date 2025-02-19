// criando um contexto
import { createContext, useState } from "react";

export const CounterContext = createContext();

// criando um provedor
export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(5);

    return <CounterContext.Provider value={{ counter, setCounter }}>{children}</CounterContext.Provider>;
};
