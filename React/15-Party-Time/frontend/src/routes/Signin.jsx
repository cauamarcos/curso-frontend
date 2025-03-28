import { useSignin } from "../hooks/useSignin";

const Signin = () => {
    const { currentComponent } = useSignin();

    return <div>{currentComponent}</div>;
};

export default Signin;
