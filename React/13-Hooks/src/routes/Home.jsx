import UseState from "../components/useState";
import UseReducer from "../components/UseReducer";
import UseEffect from "../components/UseEffect";

import { useContext } from "react";
import { SomeContext } from "../components/UseContext";

const Home = () => {
    const {contextValue} = useContext(SomeContext);

    return (
        <div>
            <h1>Home</h1>
            <UseState />
            <UseReducer />
            <UseEffect/>
            <h2>useContext</h2>
            <p>Valor do contexto: {contextValue}</p>
            <hr />
        </div>
    );
};

export default Home;
