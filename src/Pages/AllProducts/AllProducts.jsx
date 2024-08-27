import { useForm } from "react-hook-form";
import search from "../../assets/search.png";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../Components/Card/ProductCard";
import { useState } from "react";

const AllProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const { register, handleSubmit } = useForm();
  const { product, isPending } = useProducts();
  const onChange = (data) => setSearchValue(data?.category);
  const searchProductFilter = product.filter((value) =>
    value.productName.toLowerCase().includes(searchValue.toLowerCase())
  );
  

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
        <h1 className="font-semibold text-2xl md:text-3xl">All Products</h1>
        <div className="w-full md:w-1/5">
          <form onChange={handleSubmit(onChange)}>
            <div className="relative">
              <input
                className="w-full py-2 rounded-full px-4 outline-none"
                placeholder="Search a product"
                {...register("category", { maxLength: 20 })}
              />
              <div className="absolute top-0 right-0">
                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                  {/* <SearchOutlined className="text-white text-2xl font-medium " /> */}
                  <img src={search} alt="" className="w-5" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="my-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {  
        searchValue ? (
          searchProductFilter.length > 0 ? (
            searchProductFilter?.map((products) => (
              <ProductCard key={products._id} product={products} />
            ))
          ) : 
          (
            <h3 className="text-2xl font-bold text-center py-10 col-span-6">
              No Product Found
            </h3>
          )
        ) : 
        (
          product
            ?.slice(0, 18)
            .map((products) => (
              <ProductCard key={products._id} product={products} />
            ))
        )}
      </div>
      <div className={`my-10 text-center ${product?.length < 18 || searchValue || isPending  ? 'hidden' : 'block'}`}>
        <button>
          <Link to="/products">See More</Link>
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
