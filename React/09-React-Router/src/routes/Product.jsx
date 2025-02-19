import { useFetch } from "../hooks/UseFetch";
import { useParams, Link } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id;

    const { data: product } = useFetch(url);

    if (!product) return <p>Carregando...</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>R$ {product.price}</p>
            <p>ID do produto: {id}</p>
            {/* rotas aninhadas */}
            <Link to="info">Mais informações</Link>
            {/* se não colocar / na frente, a string é adicionada na rota em que o navegador já está */}
        </div>
    );
};

export default Product;
