import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home } from "./routes/home";
import { ErrorPage } from "./error-page";
import { Root } from "./routes/root";
import { GameModes } from "./routes/game-modes";
import { GameSelect } from "./routes/game-select";
import { Game, loader as gameLoader } from "./routes/game";
import { PageLayout } from "./routes/page-layout";
import { Gallery, loader as galleryLoader } from "./routes/gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <PageLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/play",
            element: <GameModes />,
          },
          {
            path: "/game/:game",
            element: <GameSelect />,
          },
          {
            path: "/gallery",
            loader: galleryLoader,
            element: <Gallery />,
          },
        ],
      },
      {
        path: "/game/:game/:difficulty",
        loader: gameLoader,
        element: <Game />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
