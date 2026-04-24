import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Products from "../../features/products";
import Tabs from "../../components/tabs/Tabs";
import AppErrorBoundary from "../../ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Error: Path doesn't exit.</h1>,
    children: [
      {
        index: true,
        element: <Tabs />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
