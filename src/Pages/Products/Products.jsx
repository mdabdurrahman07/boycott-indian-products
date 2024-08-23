import { useState } from "react";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import useCategory from "../../Hooks/useCategory";

const tabItems = [
    {name: 'indian'},
    {name: 'bangladeshi'}
]

const Products = () => {
    const {categories} = useCategory()
    const [currentTabItem, setCurrentTabItem] = useState('indian')

    return (
        <div className="py-10">
            <div className="cat_container !gap-6">
                {
                    categories?.map(item => (
                        <CategoryCard key={item.id} item={item}></CategoryCard>
                    ))
                }
            </div>
            <div className="py-10 flex justify-center">
                <div className="my_tab">
                    {
                        tabItems?.map((item, idx) => (
                            <div className={`${currentTabItem === item.name ? 'text-white bg-secondary' : ''}`} key={idx} onClick={() => setCurrentTabItem(item.name)}>{item.name}</div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Products;