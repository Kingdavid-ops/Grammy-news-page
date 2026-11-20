import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NumberContext from "./context/numberContext";
import ArticleContexts from "./context/articleContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div className="text-red-500">404 Error occoured</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <ArticleContexts>
    <NumberContext>
      <RouterProvider router={router} />
    </NumberContext>
  </ArticleContexts>
);
