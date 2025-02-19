import { useEffect, useState } from "react";

const UseEffect = () => {
    const [number, setNumber] = useState(1);
    const [anotherNumber, setAnotherNumber] = useState(1);

    useEffect(() => {
        // useEffect sem array de dependências
        console.log("Estou sendo executado");
    });

    // useEffect com array de dependências vazio, executa somente uma vez
    // ideal para carregar dados de um banco, por exemplo
    useEffect(() => {
        console.log("Execução única");
    }, []);

    // useEffect com dependências de valores, executa sempre que um valor do array de dependência for alterado
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Executou");
            setAnotherNumber(anotherNumber + 1);
        }, 2000);
        return () => clearTimeout(timer);
        // clean up para evitar que a execução continue mesmo ao mudar de página
    }, [anotherNumber]);

    const increment = () => {
        setNumber(number + 1);
    };

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={increment}>Executar</button>
            <hr />
        </div>
    );
};

export default UseEffect;
