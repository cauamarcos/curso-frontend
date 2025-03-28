import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import partyFetch from "../axios/config";
import useUserContext from "../hooks/useUserContext";

import "./Home.css";

const Home = () => {
    const { user, setUser } = useUserContext();
    const [parties, setParties] = useState(null);

    // carregando festas
    useEffect(() => {
        const loadParties = async () => {
            const res = await partyFetch.get(`/${user.email}/parties`);

            setParties(res.data);
        };

        loadParties();
    }, []);

    if (!parties) return <p>Carregando...</p>;

    return (
        <div className="home">
            <h1>Suas festas</h1>
            <div id="parties-container">
                {parties.length === 0 && <p>Não há festas cadastradas!</p>}
                {parties.map((party) => (
                    <div className="party" key={party._id}>
                        <img src={party.image} alt={party.title} />
                        <h3>{party.title}</h3>
                        <Link to={`/${user.email}/party/${party._id}`} className="btn-secondary">
                            Detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
