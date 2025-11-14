import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import HomePage from './pages/HomePage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';
import MangaPage from './pages/MangaPage.tsx';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/manga" element={<MangaPage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        )
    );

    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
