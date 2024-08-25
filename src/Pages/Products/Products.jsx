import { useState } from "react";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import useCategory from "../../Hooks/useCategory";
import useProducts from "../../Hooks/useProducts";

const tabItems = [
    {name: 'indian'},
    {name: 'bangladeshi'}
]

const Products = () => {
    const {product} = useProducts()
    const {categories} = useCategory()
    const [currentTabItem, setCurrentTabItem] = useState('indian')

    const filteredProduct = product?.filter(product => product?.origin === currentTabItem)

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
            <div className="grid grid-cols-5 gap-5">
                {
                    filteredProduct?.map(product => (
                        <div key={product?._id}>hi</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;