import { Link } from "react-router-dom"

export default function GenresList({ genres, genre }) {
    return genres.map(el => {

        return (
            <Link to={`/search/${el.slug}/`} className={el.slsug === genre ? "border-b-1 border-accent font-bold tracking-widest " : ""} key={el.id}>{el.name}</Link>
        );
    });
}