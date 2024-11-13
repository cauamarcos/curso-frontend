import MyComponent from "./MyComponent";

const TemplateExpression = () => {
    const data = {
        age: 21,
        job: "Front-end Developer",
    };

    return (
        <div>
            <p>
                Minha idade é {data.age} e eu sou {data.job}
            </p>
            <MyComponent></MyComponent>
        </div>
        // O que estiver entre chaves é executado como JavaScript
    );
};

export default TemplateExpression;
