import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/error/Error";
import Products from "../Pages/Products/Products";
import Category from "../Pages/Category/Category";
import NonIndian from "../Pages/NonIndian/NonIndian";
import ReactGa from "react-ga"

const Measurement_Id = 'G-T809YN21P6'

ReactGa.initialize(Measurement_Id)

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
