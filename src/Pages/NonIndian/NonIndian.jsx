import { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import SearchIcon from '../../assets/search.png'
import ProductCard from "../../Components/Card/ProductCard";

const NonIndian = () => {
    const {product} = useProducts()
    const [selectProduct, setSelectProduct] = useState('');

    const nonIndianProduct = product?.filter(product => product?.origin.toLowerCase() !== "india")
    const searchingProduct = nonIndianProduct?.filter(product => product?.productName.toLowerCase().includes(selectProduct.toLowerCase()))

    return (
        <div className="py-6">
            <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
                <h3 className="capitalize font-bold text-xl md:text-2xl">Non Indian Products</h3>
                <div className='search'>
                    <input onChange={(e) => setSelectProduct(e.target.value)} type="text" placeholder='Search product' />
                    <div className='bg-primary flex items-center justify-center rounded-full cursor-pointer'>
                        <img src={SearchIcon} alt="icon" className='w-5 h-5 my-2 mx-2.5' />
                    </div>
                </div> 
            </div>
            <div className="min-h-[65vh]">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 mt-6">
                    {
                        selectProduct ?
                        (
                            searchingProduct?.length > 0 ?
                            searchingProduct?.map(product => (
                                <ProductCard key={product?._id} product={product} />
                            ))
                            :
                            <h3 className="text-center font-semibold text-3xl col-span-6 py-20">No Product Found</h3>
                        )
                        :
                        nonIndianProduct?.map(product => (
                            <ProductCard key={product?._id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default NonIndian;