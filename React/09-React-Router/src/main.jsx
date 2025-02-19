import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import Product from "./routes/Product.jsx";
import Info from "./routes/Info.jsx";
import Search from "./routes/Search.jsx";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        // componente base
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            // rotas dinâmicas
            {
                path: "products/:id",
                element: <Product />,
            },
            // rotas aninhadas
            {
                path: "products/:id/info",
                element: <Info />,
            },
            // search
            {
                path: "search",
                element: <Search />,
            },
            // redirecionamento: usado quando uma página que exixstia antes deixa de existir
            // evita erros de página não encontrada (404)
            {
                path: "teste",
                element: <Navigate to="/" />,
            },
        ],
    },
    // {
    //     path: "contact",
    //     element: <Contact />,
    // },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
