import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>404 Not Found</h2>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/projects/",
        element: <Projects />,
      },
     
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:'/education',
        element : <Education />,
      },
    ],

  },

],
{basename: "/portfolio"},

);









const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
