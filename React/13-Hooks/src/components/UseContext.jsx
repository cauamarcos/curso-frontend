import { createContext } from "react";

export const SomeContext = createContext();

export const UseContext = ({ children }) => {
    const contextValue = "testing context";

    return <SomeContext.Provider value={{ contextValue }}>{children}</SomeContext.Provider>;
};

export default UseContext;
