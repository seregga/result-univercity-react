import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/category/characters">Герои</Link>
            <Link to="/category/locations">Локации</Link>
            <Link to="/category/episodes">Эпизоды</Link>
        </nav>
    )
}

export default Navbar