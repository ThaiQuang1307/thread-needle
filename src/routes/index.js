import { Navigate } from "react-router-dom";
import LayoutDefault from "../components/Layout/LayoutDefault";
import Home from "../pages/Home";
import Works from "../pages/Works";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import JobDetail from "../pages/JobDetail";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "careers/:id",
        element: <JobDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];
