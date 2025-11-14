import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/react.svg';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [query, setQuery] = useState<string>('');
    const navigate = useNavigate();

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    useEffect(() => {
        const valueChange = setTimeout(() => {
            if (query.trim() !== '') {
                navigate(`?q=${query}`);
            } else {
                navigate('/');
            }
        }, 500);

        return () => clearTimeout(valueChange);
    }, [query])

    return (
        <nav className="bg-gray-700 border-b border-gray-600">
            <div className="mx-auto container px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center">
                    <div className="flex flex-1 items-center justify-between">
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img className="h-10 w-auto" src={logo} alt="Anime app"/>
                            <span className="hidden md:block text-white text-2xl font-bold ml-2"> Anime App </span>
                        </NavLink>
                        <div
                            className="flex items-center min-w-70 rounded-md bg-gray-800 pl-3 outline-1 outline-offset-1 outline-gray-700 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                            <FaSearch className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6 mr-2"/>
                            <input id="search" type="text" name="search" value={query} onChange={(e) => setQuery(e.target.value)}
                                   placeholder="Search..." className="block min-w-0 grow bg-gray-800 py-2 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"/>
                        </div>
                        <div className="">
                            <div className="flex space-x-2">
                                <NavLink to="/" className={linkClass}>
                                    Anime
                                </NavLink>
                                <NavLink to="/manga" className={linkClass}>
                                    Manga
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
