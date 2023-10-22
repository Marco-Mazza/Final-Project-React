export default function GenresList({ genres }) {
    return genres.map(el => {
        return <p className="font-bold tracking-widest" key={el.id}>{el.name}</p>
    })
}