import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>Party Time!</h2>
            <div id="nav-links">
                <NavLink to="/">Minhas Festas</NavLink>
                <NavLink to="/party/new" className="btn">
                    Criar Festa
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
