import { useState, useRef } from "react";

const UseRef = () => {
    const inputRef = useRef();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setText("");

        inputRef.current.focus();
    }

    return (
        <div>
            <h2>useRef</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <hr />
        </div>
    );
};

export default UseRef;
