import { useState } from "react";

import useUserContext from "../hooks/useUserContext";
import partyFetch from "../axios/config";
import useToast from "../hooks/useToast";

import "./Login.css";

const Signup = ({ changePage }) => {
    const { user, setUser } = useUserContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = {
                name,
                email,
                password,
            };

            const res = await partyFetch.post("/users", user);

            if (res.status === 201) {
                const stringfiedUser = JSON.stringify(res.data.response);
                const objUser = JSON.parse(stringfiedUser);

                setUser(objUser);
                localStorage.setItem("user", stringfiedUser);
            }
        } catch (error) {
            useToast(error.response.data.msg, "error");
        }
    };

    return (
        <div id="container">
            <div id="login">
                <div id="title-side">
                    <h1>Party Time!</h1>
                </div>
                <div id="form-side">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h2>Cadastre-se</h2>
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)} />
                        <div id="actions">
                            <button type="button" id="cancel-btn" onClick={() => changePage(1)}>
                                Cancelar
                            </button>
                            <input type="submit" value="Entrar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
