import { useEffect, useState } from "react"

export default function Home() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_RAWG_API_URL}?dates=2019-01-01,2019-12-31&ordering=-added&key=${import.meta.env.VITE_RAWG_API_KEY}`)
            .then(r => r.json())
            .then(r => {
                setData(r.results);
            });
    }, []);


    return (
        <div className="min-h-screen">
            <div className="md:flex gap-12 px-12 py-12 md:py-24">
                <div className="w-full mid:w-2/5">
                    <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-6xl font-extrabold text-transparent dark:from-sky-600 dark: dark:to-sky-100 font-main pb-12">
                        {import.meta.env.VITE_PROJECT_NAME}
                    </h1>
                    <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-extrabold text-transparent dark:from-sky-600 dark: dark:to-sky-100 md:text-5xl font-main">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea deleniti ipsum nam?
                    </p>
                </div>
            </div>
            <div className="text-white">
                {data && data.map((game) => (
                    <div key={game.id}>
                        <p>{game.name}</p>
                        <img className="w-32 h-32 object-cover rounded-full" src={game.background_image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}
