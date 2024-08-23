import { useState } from "react";
import { useForm } from "react-hook-form";
import maggie from "../../assets/maggie.png";
// import { SearchOutlined } from "@ant-design/icons";
import search from "../../assets/search.png";

const AllProducts = () => {
  //   const [value, setValue] = useState();
  const { register, handleSubmit } = useForm();
  const onChange = (data) => console.log(data);
  //   console.log(value);
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
        <div className="bg-[#F3ECFF] space-y-5 border-2 border-[#916DD580] p-4 rounded-xl w-60">
          <img className="mx-auto" src={maggie} alt="noddles" />
          <h1 className="font-semibold text-2xl">Maggie Noddles</h1>
          <div>
            <span className="red_badge">Indian</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
