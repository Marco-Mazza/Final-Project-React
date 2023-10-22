/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Search, { getGenres } from "./Pages/Search";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about-us',
                element: <About />
            },
            {
                path: '/search',
                element: <Search />,
                loader: getGenres
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
]);