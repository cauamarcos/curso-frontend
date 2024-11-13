const Events = () => {
    const clickEvent = (e) => {
        console.log("Clicou");
        console.log(e);
    };

    const renderFunction = (x) => {
        if (x) return <p>Renderizando X!</p>;
        else return <p>Renderizando Y!</p>;
    };

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        console.log("Teste");
                    }}
                >
                    Clique aqui
                </button>
            </div>
            <div>
                <button onClick={clickEvent}>Clique aqui</button>
            </div>
            {/* Função de renderização */}
            {renderFunction(true)}
            {renderFunction(false)}
        </div>
    );
};

export default Events;
