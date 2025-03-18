import { useState, ChangeEvent } from "react";

const Component = () => {
    // useState com TS
    const [name, setName] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h3>Primeiro componente em TSX</h3>
            <p>Nome: {name}</p>
            <input type="text" onChange={handleChange} />
        </div>
    );
};

export default Component;
