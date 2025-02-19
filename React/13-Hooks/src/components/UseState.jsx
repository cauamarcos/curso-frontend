import { useState } from "react";
// o useState consegue re-renderizar seu valor após uma alteração, o que não pode ser feito por uma variável

const UseState = () => {
    const [name, setName] = useState("Cauã");
    let userName = "Caio";

    const changeName = () => {
        userName = "Caio Castro";

        setName("Cauã Marcos");
    };

    const [age, setAge] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    }

    return (
        <div>
            <h2>useState</h2>
            <p>useState: {name}</p>
            <p>Variável: {userName}</p>
            <button onClick={changeName}>Mudar nome</button>

            {/* useState e inputs: permite enviar os valores passados e exibí-los */}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos.</p>
            <hr />
        </div>
    );
};

export default UseState;
