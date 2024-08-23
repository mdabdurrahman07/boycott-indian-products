import { Link } from "react-router-dom";

const CategoryCard = ({item}) => {
    const {name, image, link} = item || {}
    return (
        <Link to={link} className="cat_card">
            <img src={image} alt="icon" />
            <h3 className="font-bold">{name}</h3>
        </Link>
    );
};

export default CategoryCard;