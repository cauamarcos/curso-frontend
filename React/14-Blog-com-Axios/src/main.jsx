import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import NewPost from "./routes/NewPost";
import EditPost from "./routes/EditPost";
import Post from "./routes/Post";
import Admin from "./routes/Admin";

import App from "./App";
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
                path: "add",
                element: <NewPost />,
            },
            {
                path: "admin",
                element: <Admin />,
            },
            {
                path: "/posts/:id",
                element: <Post />,
            },
            {
                path: "/posts/edit/:id",
                element: <EditPost />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
