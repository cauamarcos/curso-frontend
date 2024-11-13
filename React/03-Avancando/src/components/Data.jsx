import { useState } from "react";

const Data = () => {
    const [number, setNumber] = useState(10);

    return (
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(20)}>Alterar state</button>
        </div>
    );
};

export default Data;
