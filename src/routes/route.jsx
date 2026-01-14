import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import projectsLoader from "../loaders/projectsLoader.js";
import Error from "../pages/ErrorPage.jsx";
import Index from "../pages/Index.jsx";
import Showcase from "../pages/Showcase.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
