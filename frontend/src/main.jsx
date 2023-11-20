import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ImageComponent from "./components/ImageComponent/ImageComponent";
import SynopsisComponent from "./components/SynopsisComponent/SynopsisComponent";
import "./Main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/images",
        element: <ImageComponent />,
      },
      {
        path: "/synopsis",
        element: <SynopsisComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
