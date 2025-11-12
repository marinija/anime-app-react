import { useEffect, useState } from 'react';
import type { IPager } from '../models/pagination.model.ts';
import type { IAnime } from '../models/anime.model.ts';
import Card from '../components/Card.tsx';
import Pagination from '../components/Pagination.tsx';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
    const [topAnime, setTopAnime] = useState<IPager>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchParams] = useSearchParams();
    const [searchGames, setSearchGames] = useState<IPager>();

    const fetchTopAnime = async () => {
        try {
            const response = await fetch(`/api/top/anime?page=${currentPage}`);
            const data = await response.json() as IPager;
            setTopAnime(data);
        } catch (e) {
            console.error(`Error fetching top anime: ${e}`);
        }
    };

    const fetchSearchedAnimes = async (search: string) => {
        try {
            const response = await fetch(`/api/anime?q=${search}&page=1&limit=20`);
            const data = await response.json() as IPager;
            console.log(data);
            setSearchGames(data);
        } catch (e) {
            console.error(`Error fetching search results: ${e}`);
        }
    }

    useEffect(() => {
        fetchTopAnime();
    }, [currentPage]);

    useEffect(() => {
        const searchQuery = searchParams.get('q') ?? '';
        if (searchQuery) {
            fetchSearchedAnimes(searchQuery);
        } else {
            setSearchGames(undefined);
        }
    }, [searchParams]);

    return (
        <section className="grid grid-cols-12 gap-5">
            {searchGames ? (
                <div className="col-span-8">
                    <h2 className=" text-2xl font-bold">Search ANIMES</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {searchGames.data?.map((anime: IAnime) => (
                            <Card key={anime.mal_id} anime={anime} shortBackground={true}/>
                        ))}
                    </div>
                    {topAnime?.pagination &&
                        <Pagination pagination={searchGames.pagination} onPageChange={(page) => setCurrentPage(page)}/>}
                </div>
            ) : (
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
            )}

            <aside className="col-span-4">

            </aside>
        </section>
    );
};

export default HomePage;
