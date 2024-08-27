import { Link } from "react-router-dom";
import BannerCategoryCard from "../BannerCategoryCard/BannerCategoryCard";
import PlusIcon from '../../assets/icons/plus.png'
import ArrowIcon from '../../assets/icons/arrow.png'
import useCategory from "../../Hooks/useCategory";

const Banner = () => {
    const {categories} = useCategory()

    return (
        <div className="banner">
            <span className="badge">Bangladesh 2.0</span>
            <h2 style={{lineHeight: 1.5}}>Say no to <span className="text-red-500">Indian</span> Products <br className="hidden md:block" /> Instead use <span className="text-green-600">Bangladeshi</span> products</h2>

            <div className="cat_container">
                {
                    categories?.map(item => (
                        <BannerCategoryCard key={item.id} item={item}></BannerCategoryCard>
                    )).slice(0, 5)
                }
                <Link to="/products" className="banner_cat_card">
                    <img className="!w-4 !h-4" src={PlusIcon} alt="icon" />
                    <h3>More</h3>
                </Link>
            </div>

            <div>
                <div className="scroll_container">
                    <span className="font-medium">Scroll Down</span>
                    <img src={ArrowIcon} alt="arrow" className="w-5" />
                </div>
            </div>
        </div>
    );
};

export default Banner;