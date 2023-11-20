import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Image from "./components/Image/Image";
import Header from "./components/Header/Header";
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
  {
    path: "/test",
    element: <Image />,
  },
  {
    path: "/test2",
    element: <Header />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
