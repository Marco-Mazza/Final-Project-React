/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Link, useLoaderData, useParams, useSearchParams } from "react-router-dom"
import GenresList from "../Components/GenresList";
import GameCard from "../Components/GameCard";


export default function Search() {

    const genres = useLoaderData();

    const { genre } = useParams();
    const { num = 1 } = useParams();
    const [games, setGames] = useState(null)
    const [searched, setSearched] = useState("")
    const [loading, setLoading] = useState(true)

    const page_size = 12

    useEffect(() => {
        setLoading(true)
        setGames(null)
        setSearched("")
        fetch(`${import.meta.env.VITE_RAWG_API_URL}games?&key=${import.meta.env.VITE_RAWG_API_KEY}&genres=${genre}&page=${num}&page_size=${page_size}&ordering=-rating`)
            .then(r => r.json())
            .then(r => {
                setGames(r)
                setLoading(false)
            })
    }, [genre, num])


    const triggerSearch = () => {
        setLoading(true)
        setGames(null)
        fetch(`${import.meta.env.VITE_RAWG_API_URL}games?&key=${import.meta.env.VITE_RAWG_API_KEY}&page_size=24&search=${searched}&search_precise=true&ordering=-rating`)
            .then(r => r.json())
            .then(r => {
                setGames(r)
                setLoading(false)
            });
    }

    // useEffect(() => {
    //     if (searched.length > 4) {
    //         setLoading(true)
    //         setGames(null)
    //         fetch(`${import.meta.env.VITE_RAWG_API_URL}games?&key=${import.meta.env.VITE_RAWG_API_KEY}&page_size=24&search=${searched}&search_precise=true&ordering=-rating`)
    //             .then(r => r.json())
    //             .then(r => {
    //                 setGames(r)
    //                 setLoading(false)
    //             });
    //     }
    // }, [searched])


    return (
        <div className="px-6 min-h-screen flex">
            <div className="w-1/5 flex flex-col">
                <div className="mb-12">
                    <input type="text" className="bg-transparent border-b-2 border-accent text-slate-700 dark:text-white" placeholder="search by name..." value={searched} />
                </div>
                <GenresList genres={genres} genre={genre} />
                <button onClick={triggerSearch} className="bg-transparent">Search</button>
            </div>
            <div className="w-4/5">
                {
                    games && (
                        <>
                            <div className="flex flex-wrap">
                                {games.results.map(game => <GameCard key={game.id} game={game} />)}
                            </div>
                            <div className="mb-12 w-full">
                                {searched && (
                                    <div className="flex justify-center text-white">
                                        <div className="w-48 text-center">
                                            {num > 1 &&
                                                <Link to={`/search/${genre}/${+num - 1}`} className="text-slate-800 dark:text-white">
                                                    prev
                                                </Link>}
                                        </div>
                                        <div className="w-48 text-center">{num}</div>
                                        <div className="w-48 text-center">
                                            <Link to={`/search/${genre}/${+num + 1}`} className="text-slate-800 dark:text-white">
                                                next
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )
                }
                {
                    loading && <div className="h-full flex items-center justify-center"> loader</div>
                }
            </div>
        </div >
    );
}


export const getGenres = async () => {
    return await fetch(`${import.meta.env.VITE_RAWG_API_URL}?dates=2019-01-01,2019-12-31&ordering=-added&key=${import.meta.env.VITE_RAWG_API_KEY}`
    ).then((r) => r.json())
        .then((r) => r.results)
}