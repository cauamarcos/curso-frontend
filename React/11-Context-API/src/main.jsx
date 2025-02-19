import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

import { CounterProvider } from "./context/CounterContext";
// contexto mais complexo
import { TitleColorProvider } from "./context/TitleColorContext";

import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CounterProvider>
            <TitleColorProvider>
                <RouterProvider router={router} />
            </TitleColorProvider>
        </CounterProvider>
    </StrictMode>
);
