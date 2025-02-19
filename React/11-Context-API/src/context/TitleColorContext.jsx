import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorReducer = (state, action) => {
    switch (action.type) {
        case "red":
            return {
                ...state,
                color: "red",
            };
        case "green":
            return {
                ...state,
                color: "green",
            };
        case "blue":
            return {
                ...state,
                color: "blue",
            };
        default:
            return state;
    }
};

export const TitleColorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TitleColorReducer, { color: "orange" });

    return <TitleColorContext.Provider value={{...state, dispatch}}>{children}</TitleColorContext.Provider>;
};
