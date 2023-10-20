/* eslint-disable react/jsx-no-undef */

import { Outlet } from "react-router-dom"

/* eslint-disable no-unreachable */
export default function Root() {
    return
    <>
        <Navigation />
        <Outlet />
        <Footer />
    </>
}