import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

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
                path: "/:email/party/new",
                element: <CreateParty />,
            },
            {
                path: "/:email/party/:id",
                element: <Party />,
            },
            {
                path: "/:email/party/edit/:id",
                element: <EditParty />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    </StrictMode>
);
