import { Link } from "react-router-dom";

const BannerCategoryCard = ({item}) => {
    const {name, image, link} = item || {}

    return (
        <Link to={`/products${link}`} className="banner_cat_card">
            <img src={image} alt="icon" />
            <h3>{name}</h3>
        </Link>
    );
};

export default BannerCategoryCard;