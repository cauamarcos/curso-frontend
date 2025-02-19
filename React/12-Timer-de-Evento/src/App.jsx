import { Outlet } from "react-router-dom";
import backgroundImage from "./images/fundo.jpeg";
import { useTimerContext } from "./hooks/useTimerContext";

import "./App.css";

function App() {
    const { event } = useTimerContext();

    let eventImage = null;

    if (event) eventImage = event.image;

    return (
        <div className="App" style={eventImage ? { backgroundImage: `url(${eventImage})` } : { backgroundImage: `url(${backgroundImage})` }}>
            <div id="container">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
