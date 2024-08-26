import { Link } from "react-router-dom";

const CategoryCard = ({item}) => {
    const {name, image, link} = item || {}
    return (
        <Link to={`/products${link}`} className="cat_card">
            <img src={image} alt="icon" />
            <h3>{name}</h3>
        </Link>
    );
};

export default CategoryCard;