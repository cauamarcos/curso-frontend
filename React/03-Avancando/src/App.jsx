import "./App.css";
// imagem em assets
import nightImage from "./assets/night.jpg";
import Data from "./components/Data";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
// props
import Props from "./components/Props";
import DestructuredProps from "./components/DestructuredProps";

const users = [
    { id: 1, name: "César", age: 20, job: "unemployed" },
    { id: 2, name: "Andre", age: 30, job: "Gamer" },
    { id: 3, name: "André", age: 40, job: "Doctor" },
];

import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
    function showMessage() {
        console.log("Evento do componente pai");
    }

    const [message, setMessage] = useState("");

    const handleMessage = (msg) => {
        setMessage(msg);
    };

    return (
        <>
            <h1>Avançando em React</h1>
            {/* Inserindo imagem da pasta public*/}
            <img src="/img.jpg" alt="Imagem 1" />
            {/* Inserindo a imagem de assets */}
            <img src={nightImage} alt="Imagem 2" />
            {/* useState */}
            <Data />
            {/* Render de lista */}
            <ListRender />
            {/* Render condicional */}
            <ConditionalRender />
            {/* Props */}
            <Props name="Cauã" />
            {/* Desestruturando props */}
            <DestructuredProps name="Cauã" age={21} job="Front-end Developer" />
            {/* Reaproveitamento de componentes */}
            <DestructuredProps name="Bruno" age={21} job="Back-end Developer" />
            <DestructuredProps
                age={20}
                name="Gabs"
                job="Merschmann's Employee"
            />
            {/* Renderização de lista */}
            {users.map((user) => (
                <DestructuredProps
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    job={user.job}
                />
            ))}
            {/* Fragment: simplifica a estrutura do HTML */}
            <Fragment />
            {/* Children prop */}
            <Container>
                <p>O children leva JSX dentro dele</p>
            </Container>
            {/* Função em prop */}
            <ExecuteFunction myFunction={showMessage} />
            {/* State lift */}
            <Message msg={message} /> {/* Define a mensagem */}
            <ChangeMessage handleMessage={handleMessage} /> {/*Altera a mensagem*/}
        </>
    );
}

export default App;
