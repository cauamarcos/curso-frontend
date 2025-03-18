import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from "../axios-config";

import "./AddMemory.css";

const AddMemory = () => {
    const [inputs, setInputs] = useState({});
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", inputs.title);
        formData.append("description", inputs.description);

        try {
            const response = await axios.post("/memories", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success(response.data.msg);

            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "image") setImage(e.target.files[0]);
        else setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    return (
        <div className="add-memory-page">
            <h2>Crie uma nova memória</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input type="text" placeholder="Defina um título" name="title" onChange={handleChange} />
                </div>

                <div className="form-control">
                    <label htmlFor="description">Descrição:</label>
                    <textarea type="text" placeholder="Descreva a sua memória" name="description" onChange={handleChange}></textarea>
                </div>

                <div className="form-control">
                    <label htmlFor="image">Foto:</label>
                    <input type="file" placeholder="Defina um título" name="image" onChange={handleChange} />
                </div>

                <input type="submit" className="btn" value="Enviar" />
            </form>
        </div>
    );
};

export default AddMemory;
