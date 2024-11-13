import "./App.css";
import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";
// Comentário fora do JSX
import TemplateExpression from "./components/TemplateExpression";
import Events from "./components/Events";

function App() {
    return (
        <>
            <h1>Fundamentos do React</h1>
            <FirstComponent />
            {/* Comentário dentro do JSX */}
            <TemplateExpression />
            <MyComponent></MyComponent>
            <Events></Events>
        </>
    );
}

export default App;
