// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// refatorando com hook
import { useCounterContext } from "../hooks/UseCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contact = () => {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();

    const { color } = useTitleColorContext();

    return (
        <div>
            <h1 style={{color: color}}>Pagina de Contato</h1>
            <p>Valor do contador: {counter}</p>
        </div>
    );
};

export default Contact;
