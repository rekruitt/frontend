import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import BrowseJobs from "./pages/BrowseJobs/BrowseJobs.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import PostaJob from "./pages/PostaJob/PostaJob.jsx";
import Hero from "./pages/Hero/Hero.jsx";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/browsejobs",
        element: <BrowseJobs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/signin",
        element: <SignIn/>,
      },
      {
        path: "/postajob",
        element: <PostaJob />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
