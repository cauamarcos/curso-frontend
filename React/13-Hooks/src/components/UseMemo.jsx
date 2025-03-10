import { useState, useEffect, useMemo } from "react";

const UseMemo = () => {
    const [number, setNumber] = useState(0);

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"];
    }, []);

    useEffect(() => {
        console.log("Premium numbers foi alterado");
    }, [premiumNumbers]);
    // o useMemo evita que esse useEffect seja disparado ao fazer a checagem se o usuáro acertou ou não

    return (
        <div>
            <h2>useMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>Acertou</p> : ""}
            <hr />
        </div>
    );
};

export default UseMemo;
