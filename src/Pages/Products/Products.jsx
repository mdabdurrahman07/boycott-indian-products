import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import useCategory from "../../Hooks/useCategory";

const Products = () => {
    const {categories} = useCategory()

    return (
        <div className="py-10">
            <div className="cat_container !gap-6">
                {
                    categories?.map(item => (
                        <CategoryCard key={item.id} item={item}></CategoryCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;