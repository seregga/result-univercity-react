import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ItemPage from './pages/ItemPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path="/item/:categoryName/:id" element={<ItemPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App