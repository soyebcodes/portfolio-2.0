import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import ProjectsSection from "../pages/ProjectSection/ProjectSection";
import ContactSection from "../pages/ContactSection/ContactSection";
import BlogSection from "../pages/BlogSection/BlogSection";
import ErrorPage from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: AboutMe,
      },
      {
        path: "projects",
        Component: ProjectsSection,
      },
      {
        path: "contact",
        Component: ContactSection,
      },
      {
        path: "blog",
        Component: BlogSection,
      },
    ],
  },
]);
