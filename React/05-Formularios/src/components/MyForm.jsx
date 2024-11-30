import "./MyForm.css";
import { useState } from "react";

const MyForm = () => {
    // Gerenciamento de dados
    const [name, setName] = useState("");
    const [email, setEmail] = useState();
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");


    const handleName = (e) => {
        setName(e.target.value);
    };

    // Envio de form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio, role);
        // Limpando o formulário
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };

    return (
        <>
            {/* Criando um formulário */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />

                {/* Label envolvendo input */}
                <label>
                    <span>Email:</span>
                    <input
                        type="e-mail"
                        name="email"
                        placeholder="Digite seu e-mail"
                        // Simplificando a manipulação
                        onChange={(e) => setEmail(e.target.value)}
                        // Controlled inputs
                        value={email || ""}
                    />
                </label>

                {/* Textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                {/* Select */}
                <label>
                    <span>Função no sistema:</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </>
    );
};

export default MyForm;
