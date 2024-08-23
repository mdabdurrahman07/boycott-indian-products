import BannerCategoryCard from "../../Components/BannerCategoryCard/BannerCategoryCard";
import useCategory from "../../Hooks/useCategory";

const Home = () => {
    const {categories} = useCategory()
    

    return (
        <div className="banner">
            <span className="badge">Bangladesh 2.0</span>
            <h2>Say no to <span className="text-red-500">Indian</span> Products <br className="hidden lg:block" /> Instead use <span className="text-green-600">Bangladeshi</span> products</h2>

            {
                categories?.map(item => (
                    <BannerCategoryCard key={item.id} item={item}></BannerCategoryCard>
                ))
            }
        </div>
    );
};

export default Home;