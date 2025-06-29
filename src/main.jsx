import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={router}>
      <RootLayout />
    </RouterProvider>
  </HelmetProvider>
);
