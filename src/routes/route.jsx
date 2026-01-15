import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import projectsLoader from "../loaders/projectsLoader.js";
import Error from "../pages/ErrorPage.jsx";
import Index from "../pages/Index.jsx";
import Showcase from "../pages/Showcase.jsx";
import randomInteger from "../helpers/randomInteger.js";

const indexLoader = async () => {
  const LOADER_DELAY = randomInteger(0, 120);

  await new Promise((resolve) => setTimeout(resolve, LOADER_DELAY));
  return null;
};

const showcaseLoader = async () => {
  const LOADER_DELAY = randomInteger(0, 120);

  await new Promise((resolve) => setTimeout(resolve, LOADER_DELAY));
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: projectsLoader,
    id: "root",
    hydrateFallbackElement: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="size-6 rounded-full bg-foreground animate-ping"></div>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader,
      },
      {
        path: "showcase",
        element: <Showcase />,
        loader: showcaseLoader,
      },
    ],
  },
]);

export default router;
