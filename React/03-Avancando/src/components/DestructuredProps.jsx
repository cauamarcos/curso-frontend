const DestructuredProps = ({ name, age, job }) => {
    return (
        <div>
            <h2>Dados do usuário</h2>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {job}</li>
            </ul>
        </div>
    );
};

export default DestructuredProps;
