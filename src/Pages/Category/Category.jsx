import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { useState } from "react";
import ProductCard from "../../Components/Card/ProductCard";
import SearchIcon from '../../assets/search.png'

const tabItems = [
    {name: 'indian'},
    {name: 'non indian'}
]

const Category = () => {
    const {category} = useParams()
    const {product} = useProducts()
    const [currentTabItem, setCurrentTabItem] = useState('indian')
    const [selectProduct, setSelectProduct] = useState('');
    
    const filteredProduct = product?.filter(product => product?.category === category)
    const indianProduct = filteredProduct?.filter(product => product?.origin === "indian")
    const nonIndianProduct = filteredProduct?.filter(product => product?.origin !== "indian")

    var searchedProduct

    if(currentTabItem === 'indian'){
        const searchingProduct = indianProduct?.filter(product => product?.productName.toLowerCase().includes(selectProduct.toLowerCase()))
        searchedProduct = searchingProduct
    } else {
        const searchingProduct = nonIndianProduct?.filter(product => product?.productName.toLowerCase().includes(selectProduct.toLowerCase()))
        searchedProduct = searchingProduct
    }
    

    return (
        <div>
            <div className="py-5 grid grid-cols-3 gap-5 justify-between items-center">
                <h3 className="capitalize font-bold text-2xl">{category}</h3>
                <div className="flex justify-center">
                    <div className="my_tab !mt-0">
                        {
                            tabItems?.map((item, idx) => (
                                <div className={`${currentTabItem === item.name ? 'text-white bg-secondary' : ''}`} key={idx} onClick={() => setCurrentTabItem(item.name)}>{item.name}</div>
                            ))
                        }
                    </div>     
                </div> 
                <div className="flex justify-end">
                    <div className='search'>
                        <input onChange={(e) => setSelectProduct(e.target.value)} type="text" placeholder='Search product' />
                        <div className='bg-primary flex items-center justify-center rounded-full cursor-pointer'>
                            <img src={SearchIcon} alt="icon" className='w-5 h-5 my-2 mx-2.5' />
                        </div>
                    </div> 
                </div>          
            </div>
            <div className="min-h-[65vh]">
                <div className="grid grid-cols-6 gap-6 pt-5 pb-10">
                    {
                        selectProduct ?
                        (
                            searchedProduct?.length > 0 ?
                            searchedProduct?.map(product => (
                                <ProductCard key={product?._id} product={product} />
                            ))
                            :
                            <h3 className="text-center font-semibold text-3xl col-span-6 py-20">No Product Found</h3>
                        )
                        :
                        (
                            currentTabItem === 'indian' ? 
                            indianProduct?.map(product => (
                                <ProductCard key={product?._id} product={product} />
                            ))
                            :
                            nonIndianProduct?.map(product => (
                                <ProductCard key={product?._id} product={product} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;