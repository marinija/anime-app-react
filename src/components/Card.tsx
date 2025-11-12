import type { IAnime } from '../models/anime.model.ts';
import { Link } from 'react-router-dom';

interface ICardProps {
    anime: IAnime;
    shortBackground?: boolean;
}

const Card = ({ anime, shortBackground }: ICardProps) => {
    let background = anime.background;

    if (shortBackground && background) {
        background = background?.substring(0, 100) + '...';
    }
    return (
        <Link to={`details/${anime.mal_id}`} className="border border-gray-700 rounded-lg p-4">
            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-48 object-cover rounded-t-lg"/>
            <h3 className="text-lg font-semibold mt-2">{anime.title}</h3>
            <div className="min-h-33 flex flex-col justify-end">
                {background && <p className="mb-4">{background}</p>}
                <button className="bg-blue-400 text-white rounded-lg p-2 outline-none cursor-pointer self-start">Read more</button>
            </div>


        </Link>
    )
}

export default Card;
