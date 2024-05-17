import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import CartPage from "../pages/cart/CartPage";
import About from "../pages/about/About";
import Gallery from "../pages/gallery/Gallery";
import Blogs from "../pages/blogs/Blogs";

// Create a browser router instance with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Render Main layout component
    children: [
      {
        path: "/", // Home route
        element: <Home /> // Render Home component
      },
      {
        path: "/menu", // Menu route
        element: <Menu /> // Render Menu component
      },
      {
        path: "/cart-page", // Cart page route
        element: <CartPage /> // Render CartPage component
      },
      {
        path: "/about", // About route
        element: <About /> // Render About component
      },
      {
        path: "/gallery", // Gallery route
        element: <Gallery /> // Render Gallery component
      },
      {
        path: "/blogs", // Blogs route
        element: <Blogs /> // Render Blogs component
      }
    ]
  }
]);

export default router; // Export the router instance
