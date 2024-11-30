import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
    const n = 15;
    const title = true;

    return (
        <>
            {/* CSS global */}
            <h1>CSS no React</h1>
            {/* CSS de componente */}
            <MyComponent></MyComponent>
            <p>CSS vazando</p>
            {/* CSS inline */}
            <p style={{ color: "purple", borderBottom: "none" }}>
                Usando esilo inline
            </p>
            {/* CSS inline dinâmico */}
            <h2 style={n > 10 ? { color: "green" } : { color: "red" }}>
                CSS dinâmico
            </h2>
            {/* Classes dinâmicas */}
            <h2 className={title ? "title" : "not-title"}>Usando classes dinâmicas</h2>
            {/* CSS modules */}
            <Title></Title>
        </>
    );
}

export default App;
