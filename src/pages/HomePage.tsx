import { useEffect, useState } from 'react';
import type { IPager } from '../models/pagination.model.ts';
import type { IAnime } from '../models/anime.model.ts';
import Card from '../components/Card.tsx';
import Pagination from '../components/Pagination.tsx';

const HomePage = () => {
    const [topAnime, setTopAnime] = useState<IPager>();
    const [currentPage, setCurrentPage] = useState(1);

    const fetchTopAnime = async () => {
        try {
            const response = await fetch(`/api/top/anime?page=${currentPage}`);
            const data = await response.json() as IPager;
            setTopAnime(data);
        } catch (e) {
            console.error(`Error fetching top anime: ${e}`);
        }
    };

    useEffect(() => {
        fetchTopAnime();
    }, [currentPage]);

    return (
        <section className="grid grid-cols-12 gap-5">
            <div className="col-span-8">
                <h2 className=" text-2xl font-bold">TOP ANIMES</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {topAnime?.data?.map((anime: IAnime) => (
                        <Card key={anime.mal_id} anime={anime} shortBackground={true}/>
                    ))}
                </div>
                {topAnime?.pagination &&
                    <Pagination pagination={topAnime.pagination} onPageChange={(page) => setCurrentPage(page)}/>}
            </div>
            <aside className="col-span-4">

            </aside>
        </section>
    );
};

export default HomePage;
