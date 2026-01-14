import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Home.jsx";
import Error from "./pages/ErrorPage.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import Showcase from "./pages/Showcase.jsx";
import projectsLoader from "./loaders/projectsLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: projectsLoader,
    id: "root",
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "showcase",
        element: <Showcase />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
