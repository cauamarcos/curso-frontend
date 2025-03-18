import { createContext } from "react";

import Component from "./components/Component";
import AnotherComponent, { Job } from "./components/AnotherComponent";
import Context from "./components/Context";

import "./App.css";

interface IAppContext {
    language: string;
    framework: string;
    projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
    const name: string = "Cauã";

    const greeting = (name: string): string => {
        return `Olá, ${name}`;
    };

    // types: igual o union type e literal types
    type textOrNull = string | null;
    let myText: textOrNull = null;

    const contextValue: IAppContext = {
        language: "JavaScript",
        framework: "Express",
        projects: 2,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <div>
                <h1>React com TypeScript</h1>
                <p>{greeting(name)}</p>
                <Component />
                <AnotherComponent name="Eric" age={10} job={Job.A} />
                {myText && <p>Tem um texto</p>}
                <Context />
            </div>
        </AppContext.Provider>
    );
}

export default App;
