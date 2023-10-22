/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import GenresList from "../Components/GenresList";
import GameCard from "../Components/GameCard";


export default function Search() {
    const genres = useLoaderData()
    console.log(genres);
    return (
        <div className="px-6 min-h-screen flex">
            <div className="w-1/5 flex flex-col">
                <div className="mb-12">
                    <input type="text" className="bg-transparent border-b-2 border-bottom border-accent text-white dark:text-slate-800" placeholder="search by name..." />
                </div>
                <GenresList genres={genres} />
            </div>
            <div className="w-4/5">
                <div className="flex flex-wrap">
                    {[1, 2, 3, 4].map((game) => (
                        <GameCard key={game} />
                    ))}
                </div>
                <div>
                    paginazione
                </div>
            </div>
        </div>
    );
}


export const getGenres = async () => {
    return await fetch(`${import.meta.env.VITE_RAWG_API_URL}?dates=2019-01-01,2019-12-31&ordering=-added&key=${import.meta.env.VITE_RAWG_API_KEY}`
    ).then((r) => r.json())
        .then((r) => r.results)
}