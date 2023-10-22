export default function GameCard({ game }) {
    return <div className="w-1/2 md:w-1/4 mb-5 px-2">
        <p>{game.name}</p>
        <img src={game.background_image} className="w-full h-40 object-cover" alt="" />
    </div>
}