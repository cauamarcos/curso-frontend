import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import blogFetch from "../axios/config";

const EditPost = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const { id } = useParams();

    const getPosts = async () => {
        try {
            const response = await blogFetch.get(`/posts/${id}`);

            const data = response.data;
            setTitle(data.title);
            setBody(data.body);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    const editPost = async (e) => {
        e.preventDefault();

        const post = { title, body, userId: 1 };

        await blogFetch.put(`/posts/${id}`, {
            body: post,
        });

        navigate("/");
    };

    return (
        <div>
            <div className="newpost">
                <h2>Editando: {title}</h2>
                <form onSubmit={(e) => editPost(e)}>
                    <div className="form-control">
                        <label htmlFor="title">Título:</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Digite o título"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            value={title || ""}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="body">Conteúdo:</label>
                        <textarea
                            name="body"
                            placeholder="Digite o conteúdo"
                            onChange={(e) => setBody(e.target.value)}
                            required
                            value={body || ""}
                        ></textarea>
                    </div>
                    <button type="submit">Editar</button>
                </form>
            </div>
        </div>
    );
};

export default EditPost;
