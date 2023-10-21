/* eslint-disable react/jsx-no-undef */

import { Outlet } from "react-router-dom"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"


/* eslint-disable no-unreachable */
export default function Root() {
    return (
        <>
            <div className="antialiased min-h-screen text-slate-800 bg-white dark:text-slate-200 dark:bg-slate-900">
                <Navigation />
                <div className="pt-24">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
}