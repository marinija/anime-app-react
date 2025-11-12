import { useEffect, useState } from 'react';
import type { IAnime } from '../models/anime.model.ts';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const DetailsPage = () => {
    const [anime, setAnime] = useState<IAnime>();
    const { id } = useParams();
    const trailerUrl = anime?.trailer?.embed_url
        ? anime.trailer.embed_url.replace("&autoplay=1", "")
        : null;

    const fetchAnime = async () => {
        try {
            const response = await fetch(`/api/anime/${id}`);
            const data = await response.json();
            console.log(data);
            setAnime(data.data);
        } catch (e) {
            console.error(`Error fetching anime: ${e}`);
        }
    };

    useEffect(() => {
        fetchAnime();
    }, []);


    return (
        <>
            <Link to="../" className="border border-gray-700 text-white hover:text-gray-300 hover:border-gray-500 p-3 rounded-lg inline-flex items-center gap-2">
                <FaArrowLeft/>
                <span>Back to Home</span>
            </Link>
            <div className="border border-gray-700 rounded-lg mt-10">
                {trailerUrl && (
                    <div className="relative w-full h-120 shadow-lg rounded-lg overflow-hidden">
                        <iframe
                            src={trailerUrl}
                            className="absolute top-0 left-0 w-full h-full"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            title={`${anime.title} Trailer`}
                        ></iframe>
                    </div>
                )}
                <div className="grid grid-cols-12 gap-10 p-10">
                    <div className="col-span-4">
                        <img src={anime?.images.jpg.image_url} alt={anime?.title} className="w-full rounded-lg"/>
                    </div>
                    <div className="col-span-8">
                        <h2 className="text-2xl font-bold">{anime?.title}</h2>
                        <p className="mt-5">{anime?.background}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsPage;
