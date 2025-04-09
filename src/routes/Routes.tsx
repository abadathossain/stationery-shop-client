import Home from "@/components/home/Home/Home";
import Root from "@/layout/Root";
import { createBrowserRouter } from "react-router-dom";
import About from "./../components/about/About";
import Featured from "@/components/featured/Featured";
import Products from "./../components/products/Products";
import Contact from "./../contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default router;
