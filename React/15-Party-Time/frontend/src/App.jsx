import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Signin from "./routes/Signin";
import useUserContext from "./hooks/useUserContext";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const { user } = useUserContext();

    if (!user) {
        return (
            <div>
                <ToastContainer />
                <Signin />
            </div>
        );
    }

    return (
        <div>
            <ToastContainer />
            <Navbar />
            <Outlet />
        </div>
    );
}

export default App;
