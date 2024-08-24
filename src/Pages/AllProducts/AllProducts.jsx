import { useForm } from "react-hook-form";
import maggie from "../../assets/maggie.png";
import search from "../../assets/search.png";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const AllProducts = () => {
  const { register, handleSubmit } = useForm();
  const onChange = (data) => console.log(data);
  const {product} = useProducts()
  console.log(product)
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl">All Products</h1>
        <div className="w-1/5">
          <form onClick={handleSubmit(onChange)}>
            <div className="relative">
              <input
                className="w-full py-2 rounded-full px-4 outline-none"
                placeholder="Search a product"
                {...register("category", { maxLength: 20 })}
              />
              <div className="absolute top-0 right-0">
                <div
                  type="submit"
                  className="bg-primary rounded-full w-10 h-10 flex items-center justify-center"
                >
                  {/* <SearchOutlined className="text-white text-2xl font-medium " /> */}
                  <img src={search} alt="" className="w-5" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="my-10 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
       {
        product?.slice(0,10).map(products =>(
          <div key={products?.id} className="bg-[#F3ECFF] space-y-5 border-2 border-[#916DD580] p-4 rounded-xl w-60">
          <img className="mx-auto" src={products?.productImg} alt="noddles" />
          <h1 className="font-semibold text-2xl">{products?.productName}</h1>
          <div>
            <span className="red_badge">{products?.origin}</span>
          </div>
        </div>
        ))
       }
      </div>
      <div className="my-10 text-center">
            <button><Link to="/products">See More</Link></button>
      </div>
    </div>
  );
};

export default AllProducts;
