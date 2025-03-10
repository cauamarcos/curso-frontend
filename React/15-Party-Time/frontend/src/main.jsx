import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./routes/Home";
import CreateParty from "./routes/CreateParty";
import Party from "./routes/Party";
import EditParty from "./routes/EditParty";

import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/party/new",
                element: <CreateParty />,
            },
            {
                path: "/party/:id",
                element: <Party />,
            },
            {
                path: "/party/edit/:id",
                element: <EditParty />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </StrictMode>
);
