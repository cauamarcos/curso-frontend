import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TimerProvider } from "./context/TimerContext.jsx";

import Form from "./components/Form.jsx";
import TimerPage from "./routes/TimerPage.jsx";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Form />,
            },
            {
                path: "timer",
                element: <TimerPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TimerProvider>
            <RouterProvider router={router} />
        </TimerProvider>
    </StrictMode>
);
