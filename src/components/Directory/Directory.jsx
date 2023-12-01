import CategoryItem from "../CategoryItem/CategoryItem.jsx";

import {categories} from '../../data/data.js'

import './Directory.scss'

const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map(({ id, title, imageUrl }) => <CategoryItem key={id} name={title} image={imageUrl} />)}
        </div>
    );
}

export default Directory;