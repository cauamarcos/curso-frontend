type Props = {
    name: string;
    age: number;
    job: Job;
};

export enum Job {
    P = "programer",
    D = "doctor",
    A = "athlete",
}

const AnotherComponent = ({ name, age, job }: Props) => {
    // desestruturando props
    return (
        <div>
            <p>O nome é {name}</p>
            <p>A idade é {age}</p>
            <p>Profissão: {job}</p>
        </div>
    );
};

export default AnotherComponent;
