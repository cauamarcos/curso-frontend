import { useState, useEffect } from "react";
import { useFetch } from "./hooks/UseFetch";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
    // resgatando dados
    const [products, setProducts] = useState([]);

    // custom hook
    const { data: items, httpConfig, loading, error } = useFetch(url);

    // useEffect(() => {
    //     async function getData() {
    //         const res = await fetch(url);
    //         const data = await res.json();

    //         setProducts(data);
    //     }

    //     getData();
    // }, []);

    // envio de dados
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
          name,
          price,
      };

        httpConfig(product, "POST");

        // const res = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(product),
        // });

        // // carregamento dinâmico
        // const addedProduct = await res.json();

        // setProducts((prevProducts) => [...prevProducts, addedProduct]);
    };

    return (
        <div className="App">
          {/* Loading */}
          {loading && <p>Carregando...</p>}
          {/* Tratando erro */}
          {error && <p>{error}</p>}
          {/* Resgatando dados */}
            <ul>
                {items &&
                    items.map((product) => (
                        <li key={product.id}>
                            {product.name} - R${product.price}
                        </li>
                    ))}
            </ul>

            <div className="add-product">
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <label>Preço</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

                    {/* <input type="submit" value="Enviar" /> */}
                    {/* Loading post */}
                    {loading && <input type="submit" disabled value="Aguarde" />}
                    {!loading && <input type="submit" value="Enviar" />}
                </form>
            </div>
        </div>
    );
}

export default App;
