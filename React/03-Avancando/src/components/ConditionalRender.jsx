const ConditionalRender = () => {
    const x = true;
    const y = false;
    return (
        <div>
            {x && <p>X é true</p>}
            {y ? <p>Y é true</p> : <p>Y é falso</p>}
        </div>
    );
};

export default ConditionalRender;
