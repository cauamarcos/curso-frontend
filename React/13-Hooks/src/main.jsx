import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UseContext from "./components/UseContext";

import App from "./App";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

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
        <UseContext>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </UseContext>
    </StrictMode>
);
