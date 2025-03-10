import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div id="navbar">
            <Link to="/">
                <h2>Blog</h2>
            </Link>
            <div id="links">
                <Link to="/">Home</Link>
                <Link to="/admin">Gerenciar</Link>
                <Link to="/add">
                    <button>Novo Post</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
