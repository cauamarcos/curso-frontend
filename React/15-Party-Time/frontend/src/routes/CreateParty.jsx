import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import partyFetch from "../axios/config";
import useToast from "../hooks/useToast";
import useUserContext from "../hooks/useUserContext";

import "./Form.css";

const CreateParty = () => {
    const { user, setUser } = useUserContext();

    const [services, setServices] = useState([]);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);
    const [image, setImage] = useState("");
    const [partyServices, setPartyServices] = useState([]);

    const navigate = useNavigate();

    // carregando serviços
    useEffect(() => {
        const loadServices = async () => {
            const res = await partyFetch.get("/services");

            setServices(res.data);
        };

        loadServices();
    }, []);

    const handleServices = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;

        const checkedService = services.filter((service) => service._id === value);

        if (checked) setPartyServices((services) => [...services, checkedService[0]]);
        else setPartyServices((services) => services.filter((service) => service._id !== value));
    };

    const createParty = async (e) => {
        e.preventDefault();

        try {
            const party = {
                title,
                author,
                description,
                budget,
                image,
                services: partyServices,
            };

            const res = await partyFetch.put(`${user.email}/parties`, party);

            if (res.status === 201) navigate("/");

            useToast(res.data.msg);
        } catch (error) {
            useToast(error.response.data.msg, "error");
        }
    };

    return (
        <div className="form-page">
            <h2>Crie sua próxima Festa</h2>
            <p>Defina o seu orçamento e escolha os serviços</p>
            <form onSubmit={(e) => createParty(e)}>
                <div className="form-control">
                    <label htmlFor="name">Nome da festa:</label>
                    <input id="name" type="text" placeholder="Seja criativo..." required onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className="form-control">
                    <label htmlFor="author">Anfitrião:</label>
                    <input
                        id="author"
                        type="text"
                        placeholder="Quem está dando a festa?"
                        required
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="description">Descrição:</label>
                    <textarea
                        id="description"
                        placeholder="Conte mais sobre a festa..."
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="budget">Orçamento:</label>
                    <input
                        type="number"
                        id="budget"
                        placeholder="Quanto você pretende investir?"
                        required
                        onChange={(e) => setBudget(e.target.value)}
                        value={budget}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="image">Imagem:</label>
                    <input
                        type="text"
                        id="image"
                        placeholder="Insira a URL de uma imagem"
                        required
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
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
                                        <input type="checkbox" value={service._id} onChange={(e) => handleServices(e)} />
                                        <p>Marque para solicitar</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="btn-div">
                    <input type="submit" value="Criar festa" className="btn" />
                </div>
            </form>
        </div>
    );
};

export default CreateParty;
