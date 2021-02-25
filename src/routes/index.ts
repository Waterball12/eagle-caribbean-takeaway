import Home from "../views/Home";
import About from "../views/About";
import Menu from "../views/Menu";
import Gallery from "../views/Gallery";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/menu",
        component: Menu
    },
    {
        path: "/gallery",
        component: Gallery
    }
]

export default routes;
