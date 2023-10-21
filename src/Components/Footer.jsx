/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-[#14496c] to-[#103954cc] p-4 border-t border-accent text-white flex justify-between">
            <ul className="flex items-center">
                <Link className="mr-4 md:mr-12" to="/about-us" >About</Link>
                <Link className="mr-4 md:mr-12" to="/fake" >Privacy</Link>
                <Link className="mr-4 md:mr-12" to="/fake" >Contact</Link>
                <Link className="mr-4 md:mr-12" to="/fake" >Stack</Link>
            </ul>
            <div className="flex">
                <span className="mx-4 font-bold cursor-pointer">EN</span>
                <span className="mx-4 cursor-pointer">IT</span>
            </div>
        </footer>
    )
}