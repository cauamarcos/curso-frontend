import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "./Navbar.css";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <nav id="navbar">
            <h2>Party Time!</h2>
            <div id="nav-links">
                <NavLink to="/" className="btn2">
                    Minhas Festas
                </NavLink>
                <NavLink to={`/${user.email}/party/new`} className="btn">
                    Criar Festa
                </NavLink>
                <NavLink to="/" className="btn2" onClick={() => logout()}>
                    Sair
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
