import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <QueryClientProvider client={QueryClient}> */}
      {/* <HelmetProvider> */}
      <Toaster />
      <RouterProvider router={router} />
      {/* </HelmetProvider> */}
      {/* </QueryClientProvider> */}
    </AuthProvider>
  </React.StrictMode>
);