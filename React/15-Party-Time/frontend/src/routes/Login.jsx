import { useState } from "react";

import partyFetch from "../axios/config";
import useToast from "../hooks/useToast";
import useUserContext from "../hooks/useUserContext";

import "./Login.css";

const Login = ({ changePage }) => {
    const { user, setUser } = useUserContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const login = {
                email,
                password,
            };

            const res = await partyFetch.post(`/users/${email}`, login);

            if (res.status === 200) {
                const stringfiedUser = JSON.stringify(res.data.user);
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
                        <h2>Entrar</h2>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail" required onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Digite a sua senha"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div id="actions">
                            <button type="button" id="register-btn" onClick={() => changePage(0)}>
                                Cadastrar
                            </button>
                            <input type="submit" value="Entrar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
