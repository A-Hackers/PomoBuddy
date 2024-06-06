import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/LoginPage", element: <LoginPage /> },
  { path: "/SignPage", element: <SignUpPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
