/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function ProductCard({product}) {
    console.log(product)
    const {productImg, productName , origin, category, type, alt, company} = product || {}
  return (
    <div
      
      className="bg-[#F3ECFF] space-y-5 border-2 border-primary border-opacity-20 p-4 rounded-xl"
    >
      <img className="mx-auto w-24 h-auto max-h-24" src={productImg} alt="noddles" />
      <h1 className="font-semibold text-2xl text-center">{productName}</h1>
      <div className="text-center">
        <span className="red_badge">{origin}</span>
      </div>
    </div>
  );
}

export default ProductCard;
