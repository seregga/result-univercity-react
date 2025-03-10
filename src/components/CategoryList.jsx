import { Link } from 'react-router-dom';

const CategoryList = ({ elements, categoryName }) => {
    if (elements.length === 0) {
        return <p>Нет данных для отображения.</p>
    }

    return (
        <ul>
            {elements.map(el => (
                <li key={el.id} element={el}>
                    <Link to={`/item/${categoryName}/${el.id}`}>
                        {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList