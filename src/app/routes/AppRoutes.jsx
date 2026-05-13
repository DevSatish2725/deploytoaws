import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Products from "../../features/products";
import Tabs from "../../components/tabs/Tabs";
import AppErrorBoundary from "../../ErrorBoundary";
import Posts from "../../features/posts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Practice from "../../features/practice";
import ProtectedRoute from "./ProtectedRoute";
import FunZone from "../../features/fun-zone";

const queryClient = new QueryClient();
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
        element: <ProtectedRoute />,
        children: [
          {
            path: "posts",
            element: (
              <QueryClientProvider client={queryClient}>
                <Posts />
              </QueryClientProvider>
            ),
          },
          {
            path: "practice",
            element: (
              <QueryClientProvider client={queryClient}>
                <Practice />
              </QueryClientProvider>
            ),
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/funzone",
    element: <FunZone />,
  },
]);

export default router;
