import { useReducer, useState } from "react";
// é usado em operações mais complexas de casos de alterações de valores

const UseReducer = () => {
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    const initialTasks = [
        { id: 1, text: "Fazer uma coisa" },
        { id: 2, text: "Fazer outra coisa" },
    ];

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "add":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                };

                setTaskText("");

                return [...state, newTask];
            case "delete":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    };

    const [taskText, setTaskText] = useState();

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({ type: "add" });
    };

    const removeTask = (id) => {
        dispatchTasks({ type: "delete", id });
    };

    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Mudar número</button>
            <h3>Tarefas</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => {
                        setTaskText(e.target.value);
                    }}
                    value={taskText}
                />
                <input type="submit" value="Enviar" />
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
                        {task.text}
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
};

export default UseReducer;
