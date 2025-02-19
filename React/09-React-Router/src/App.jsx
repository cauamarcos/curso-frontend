import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
    return (
        <div>
            <Navbar />
            <SearchForm />
            <Outlet />
            {/* O Outlet é o conteúdo modificável da página */}
            <p>Footer</p>
        </div>
    );
}

export default App;
