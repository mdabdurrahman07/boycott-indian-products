import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/error/Error";
import Products from "../Pages/Products/Products";
import Category from "../Pages/Category/Category";
import NonIndian from "../Pages/NonIndian/NonIndian";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/non-indian",
        element: <NonIndian />,
      },
      {
        path: "/products/:category",
        element: <Category />
      }
    ],
  },
]);

export default router;
