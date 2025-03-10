import { useContext } from "react";
import { SomeContext } from "../components/UseContext";

import UseState from "../components/useState";
import UseReducer from "../components/UseReducer";
import UseEffect from "../components/UseEffect";
import UseRef from "../components/UseRef";
import UseCallback from "../components/UseCallback";
import UseMemo from "../components/UseMemo";
import UseLayoutEffect from "../components/UseLayoutEffect";
import UseImperativeHandle from "../components/UseImperativeHandle";
import HookCustom from "../components/HookCustom";

const Home = () => {
    const { contextValue } = useContext(SomeContext);

    return (
        <div>
            <h1>Home</h1>
            <UseState />
            <UseReducer />
            <UseEffect />
            <h2>useContext</h2>
            <p>Valor do contexto: {contextValue}</p>
            <hr />
            <UseRef />
            <UseCallback />
            <UseMemo />
            <UseLayoutEffect />
            <UseImperativeHandle />
            <HookCustom />
        </div>
    );
};

export default Home;
