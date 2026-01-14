import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import projectsLoader from "../loaders/projectsLoader.js";
import Error from "../pages/ErrorPage.jsx";
import Index from "../pages/Home.jsx";
import Showcase from "../pages/Showcase.jsx";

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

export default router;
