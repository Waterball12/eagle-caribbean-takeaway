import Home from "../views/Home";
import About from "../views/About";
import Menu from "../views/Menu";

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
    }
]

export default routes;