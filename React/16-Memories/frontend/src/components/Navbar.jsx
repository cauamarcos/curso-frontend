import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <h2>
                <Link to="/">Memories</Link>
            </h2>
            <div id="nav-links">
                <Link to="/">Home</Link>
                <Link to="/add">Adicionar Memória</Link>
            </div>
        </nav>
    );
};

export default Navbar;
