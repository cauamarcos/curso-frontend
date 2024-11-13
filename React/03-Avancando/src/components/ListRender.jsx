import { useState } from "react";

const ListRender = () => {
    const list = ["Bruno", "Cauã", "Gabs"];

    const [users, setUsers] = useState([
        { id: 1, name: "Bruno", age: 21 },
        { id: 2, name: "Cauã", age: 21 },
        { id: 3, name: "Gabs", age: 20 },
    ]);
    // usando previousState para modificar o valor original da lista
    const deleteLastUser = () => {
        setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== prevUsers.length)
        );
    };

    return (
        <div>
            {/* Render sem key */}
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li> // abordagem não recomendada usando posição no arranjo como key
                ))}
            </ul>
            {/* Render com key */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}, {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteLastUser}>Delete Last User</button>
        </div>
    );
};

export default ListRender;
