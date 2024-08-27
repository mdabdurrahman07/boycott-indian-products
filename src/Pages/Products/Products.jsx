import { useState } from "react";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import useCategory from "../../Hooks/useCategory";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../Components/Card/ProductCard";

const tabItems = [
    {name: 'indian'},
    {name: 'non indian'}
]

const Products = () => {
    const {product} = useProducts()
    const {categories} = useCategory()
    const [currentTabItem, setCurrentTabItem] = useState('indian')
    
    const indianProduct = product?.filter(product => (product?.origin.toLowerCase() === "indian") || (product?.origin.toLowerCase() === 'india'))
    const nonIndianProduct = product?.filter(product => 
        product?.origin.toLowerCase() !== "india"
    );

    console.log(product?.filter(product => (product?.origin.toLowerCase() !== "indian") || (product?.origin.toLowerCase() !== 'india')));
    

    return (
        <div className="py-10">
            <div className="cat_container !gap-6">
                {
                    categories?.map(item => (
                        <CategoryCard key={item.id} item={item}></CategoryCard>
                    ))
                }
            </div>
            <div className="py-5 md:py-10 flex justify-center">
                <div className="my_tab">
                    {
                        tabItems?.map((item, idx) => (
                            <div className={`${currentTabItem === item.name ? 'text-white bg-secondary' : ''}`} key={idx} onClick={() => setCurrentTabItem(item.name)}>{item.name}</div>
                        ))
                    }
                </div>                
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
                {
                    currentTabItem === 'indian' ? 
                    indianProduct?.map(product => (
                        <ProductCard key={product?._id} product={product} />
                    ))
                    :
                    nonIndianProduct?.map(product => (
                        <ProductCard key={product?._id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;