import Navbar from '../components/Navbar.tsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.tsx';

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <main className="container mx-auto min-h-[calc(100vh-81px)] py-10">
                <Outlet/>
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
