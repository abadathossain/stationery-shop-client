import Root from "@/layout/Root";
import Home from "@/components/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
