import { useLayoutEffect, useEffect, useState } from "react";

const UseLayoutEffect = () => {
    const [name, setName] = useState("César");

    useEffect(() => {
        console.log("2");
        setName("Matheus");
    }, []);

    useLayoutEffect(() => {
        console.log("1");
        setName("Lucas");
    }, []);
    // é executado antes de qualquer elemento ser exibido, ou seja, ao carregar a página

    console.log(name)

    return <div>
        <h2>useLayoutEffect</h2>    
        <p>Nome: {name}</p>
        <hr />
    </div>;
};

export default UseLayoutEffect;
