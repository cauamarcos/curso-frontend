// alterando o valor do contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
    const { counter } = useContext(CounterContext);

    const { color, dispatch } = useTitleColorContext();

    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />
            {/* alterando contexto complexo */}
            <div>
                <button onClick={() => dispatch({ type: "blue" })}>Azul</button>
                <button onClick={() => dispatch({ type: "red" })}>Vermelho</button>
            </div>
        </div>
    );
};

export default Home;
