import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    },
    // o cabeçalho permite uma comunicação entre o front e o servidor, 
    // o que pode ser útil para o envio de tokens, por exemplo
});

export default blogFetch;

// essa abordagem reduz replicação do link e facilita em caso de alteração da database no futuro
