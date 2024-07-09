import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Cart from "../pages/cart/Cart";

import Detail from "../pages/detail/Detail";
import CheckOut from "../pages/checkOut/CheckOut";
import Favorite from "../pages/favorite/Favorite";
import Contact from "../pages/contact/Contact";
import About from "../pages/About";
import NotFoundPage from "../pages/not-found-page/NotFounPage";
import SignUp from "../pages/signUp/SignUp";

const menu = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/signUp",
        name: "SignUp",
        component: SignUp
    },

    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: Detail
    },
    {
        path: "/checkOut",
        name: "CheckOut",
        component: CheckOut
    },
    {
        path: "/favorite",
        name: "Favorite",
        component: Favorite
    },
];

const AppRoutes = () => {
    return (
            <Routes>
                {menu.map(route => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
    );
};

export default AppRoutes;
