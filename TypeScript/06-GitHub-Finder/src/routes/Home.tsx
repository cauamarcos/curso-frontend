import { useState } from "react";
import { UserProps } from "../types/user";

import Search from "../components/Search";
import User from "../components/User";
import Loader from "../components/Loader";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const loadUser = async (userName: string) => {
        setIsLoading(true);

        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        setIsLoading(false);

        if (res.status === 404) {
            setError(true);
            if (user) setUser(null);
            return;
        } else if (error) setError(false);

        const { avatar_url, login, location, followers, following } = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };

        setUser(userData);
    };

    return (
        <div>
            <Search loadUser={loadUser} />
            {isLoading && <Loader />}
            {user && <User {...user} />}
            {error && <p>Usuário não encontrado</p>}
        </div>
    );
};

export default Home;
