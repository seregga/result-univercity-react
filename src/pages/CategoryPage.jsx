import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import characters from '../assets/json/characters.json';
import locations from '../assets/json/location.json';
import episodes from '../assets/json/episode.json';

const categories = {
    characters,
    locations,
    episodes,
}

const ruCategoriesName = ["Герои", "Локации", "Эпизоды"]

const CategoryPage = () => {
    const { categoryName } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    
    const [sortOrder, setSortOrder] = useState('ASC')

    const data = categories[categoryName]
    const sortedData = [...data].sort((a, b) => {
        const dateA = new Date(a.created)
        const dateB = new Date(b.created)
        return sortOrder === 'ASC' ? dateA - dateB : dateB - dateA
    })

    const handleSort = () => {
        const newSortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC'
        setSortOrder(newSortOrder)
        navigate(`${location.pathname}?sort=${newSortOrder}`)
    }
    
    const catVisibleName = ruCategoriesName[Object.keys(categories).indexOf(categoryName)]

    return (
        <div>
            <h1>{catVisibleName}</h1>
            <button onClick={handleSort}>Сортировать по дате ({sortOrder})</button>
            <CategoryList elements={sortedData} categoryName={categoryName} />
        </div>
    )
}

export default CategoryPage