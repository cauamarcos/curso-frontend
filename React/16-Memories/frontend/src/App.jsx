import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnHover
                draggable
                theme="light"
            />
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
