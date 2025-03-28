import { useState, useEffect, use } from "react";
import { useNavigate, useParams } from "react-router-dom";

import partyFetch from "../axios/config";
import useToast from "../hooks/useToast";
import useUserContext from "../hooks/useUserContext";

import "./Form.css";

const EditParty = () => {
    const { id } = useParams();
    const { user, setUser } = useUserContext();

    const [party, setParty] = useState(null);
    const [services, setServices] = useState([]);

    const navigate = useNavigate();

    // carregando serviços
    useEffect(() => {
        const loadServices = async () => {
            const res = await partyFetch.get("/services");

            setServices(res.data);

            loadParty();
        };

        const loadParty = async () => {
            const res = await partyFetch.get(`/${user.email}/parties/${id}`);

            setParty(res.data);
        };

        loadServices();
    }, []);

    const handleServices = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        let partyServices = party.services;

        const checkedService = services.filter((service) => service._id === value);

        if (checked) partyServices = [...partyServices, checkedService[0]];
        else partyServices = partyServices.filter((service) => service._id !== value);

        setParty({ ...party, services: partyServices });
    };

    const updateParty = async (e) => {
        e.preventDefault();

        try {
            const res = await partyFetch.put(`/${user.email}/parties/${id}`, party);

            if (res.status === 200) navigate(`/${user.email}/party/${id}`);
        } catch (error) {
            useToast(error.response.data.msg, "error");
        }
    };

    if (!party) return <p>Carregando...</p>;

    return (
        <div className="form-page">
            <h2>Editando: {party.title}</h2>
            <p>Ajuste as informações da sua festa</p>
            <form onSubmit={(e) => updateParty(e)}>
                <div className="form-control">
                    <label htmlFor="name">Nome da festa:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Seja criativo..."
                        required
                        onChange={(e) => setParty({ ...party, title: e.target.value })}
                        value={party.title}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="author">Anfitrião:</label>
                    <input
                        id="author"
                        type="text"
                        placeholder="Quem está dando a festa?"
                        required
                        onChange={(e) => setParty({ ...party, author: e.target.value })}
                        value={party.author}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="description">Descrição:</label>
                    <textarea
                        id="description"
                        placeholder="Conte mais sobre a festa..."
                        required
                        onChange={(e) => setParty({ ...party, description: e.target.value })}
                        value={party.description}
                    ></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="budget">Orçamento:</label>
                    <input
                        type="number"
                        id="budget"
                        placeholder="Quanto você pretende investir?"
                        required
                        onChange={(e) => setParty({ ...party, budget: e.target.value })}
                        value={party.budget}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="image">Imagem:</label>
                    <input
                        id="image"
                        type="text"
                        placeholder="Insira a URL de uma imagem"
                        required
                        onChange={(e) => setParty({ ...party, image: e.target.value })}
                        value={party.image}
                    />
                </div>
                <div className="form-control">
                    <h2>Escolha os serviços</h2>
                    <div className="services-container">
                        {services.length === 0 && <p>Carregando...</p>}
                        {services.length > 0 &&
                            services.map((service) => (
                                <div className="service" key={service._id}>
                                    <img src={service.image} alt={service.name} />
                                    <p className="service-name">{service.name}</p>
                                    <p className="service-price">R${service.price}</p>
                                    <div className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            value={service._id}
                                            onChange={(e) => handleServices(e)}
                                            checked={party.services.find((partyService) => partyService._id === service._id) || ""}
                                        />
                                        <p>Marque para solicitar</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="btn-div">
                    <input type="submit" value="Editar Festa" className="btn" />
                </div>
            </form>
        </div>
    );
};

export default EditParty;
