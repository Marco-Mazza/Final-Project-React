/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navigation() {
    const [open, setOpen] = useState(false)
    return <>
        <nav className="w-screen fixed z-30 px-2 h-12 flex items-center bg-gradient-to-r from-[#14496c] from-20% via-[#14496cb3] via-90% to-[#14496cb3] after:absolute after:content-[''] after:bottom-[-1px] after:left-[77px] after:h-[1px] after:w-full after:bg-cyan-400">
            <div className={"after:border-r-6 fixed left-0 top-[19px] z-[-1] h-[44px] w-[60px] border-b-2 border-cyan-400 bg-[#14496c] before:absolute before:bottom-[1px] before:right-[-8px] before:z-[0] before:h-[14px] before:w-[18px] before:skew-x-[-50deg] before:bg-[#14496c] before:content-[''] after:absolute after:bottom-[-2px] after:right-|-10px) after:h-[15px| after:w-[6px] after:skew-x-[-50deg] after:animate-flash after:bg-white after:content-['']"}
            >
            </div>
            <div className="text-white flex justify-between w-2/3 md:w-1/2">
                <Link to="/home" className="font-bold tracking-widest" >ReHack</Link>
                <Link to="/search" className="font-main hidden md:inline" >Search</Link>
                <Link to="/home" className="font-main hidden md:inline" >Home</Link>
                <Link to="/home" className="font-main hidden md:inline" >Home</Link>
            </div>
            <div className="flex justify-end w-1/2">
                <ThemeSwitcher />
                <Link to="/login">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ms-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </Link>
                <button onClick={() => setOpen(!open)} className="md:hidden ms-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
            </div>
        </nav>
        <nav className={" fixed right-0 z-20 h-screen w-full overflow-y-auto bg-gray-300 bg-opacity-80 p-4 pt-20 backdrop-blur-sm transition-transform dark:bg-sky-900 dark:bg-opacity-80 " + (open ? "" : "translate-x-full")}>
            <div className="flex flex-col">
                <Link to="/home" className="py-12 font-main font-bold tracking-widest" >Home</Link>
                <Link to="/home" className="py-12 font-main" >Home</Link>
                <Link to="/home" className="py-12 font-main" >Home</Link>
                <Link to="/home" className="py-12 font-main" >Home</Link> </div>
        </nav>
    </>
}

