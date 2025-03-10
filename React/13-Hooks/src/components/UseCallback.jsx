import { useCallback, useState } from "react";
// evita recarregamento desnecessário de dados ao re-renderizar um componente

import List from "./List";

const UseCallback = () => {
    const [counter, setCounter] = useState(0);

    const getItemsFromDatabase = useCallback(() => {
        return ["a", "b", "c"];
    }, []);
    // dentro do array do useCallback deve ficar o que faria a função ser ativa para recarregar os dados

    return (
        <div>
            <h2>useCallback</h2>
            <List getItems={getItemsFromDatabase} />
            <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
            <p>{counter}</p>
            <hr />
        </div>
    );
};

export default UseCallback;
