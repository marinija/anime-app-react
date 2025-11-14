import { useEffect, useState } from 'react';
import type { INews } from '../models/news.model.ts';

const LatestNews = () => {
    const [news, setNews] = useState<Array<INews>>([]);

    const fetchNews = async () => {
        try {
            const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://myanimelist.net/rss/news.xml');
            const data = await response.json();
            setNews(data.items);
        } catch (e) {
            console.error(`Error fetching news: ${e}`);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            <h2 className="text-2xl font-bold">LATEST NEWS</h2>
            {news.length === 0 ? <p>Loading...</p> : (
                news.map((item: INews) => (
                    <div className="flex flex-col gap-4 mt-5">
                        <h3 className="text-2xl text-gray-100">{item.title}</h3>
                        <span>Publish date: {item.pubDate}</span>
                        <p>{item.description?.length > 200 ? item.description.slice(0, 200) + '...' : item.description}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white rounded-lg p-2 outline-none cursor-pointer self-start">Read more</a>
                    </div>
                ))
            )}
        </>
    );
};

export default LatestNews;
