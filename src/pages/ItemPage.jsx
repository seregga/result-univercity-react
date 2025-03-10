import { useParams } from 'react-router-dom';
import characters from '../assets/json/characters.json';
import locations from '../assets/json/location.json';
import episodes from '../assets/json/episode.json';

const categories = {
    characters,
    locations,
    episodes,
}

const ItemPage = () => {
    const { categoryName, id } = useParams()
    const item = categories[categoryName].find((item) => item.id === Number(id))

    if (!item) {
        return <div>Элемент не найден</div>
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
    )
}

export default ItemPage