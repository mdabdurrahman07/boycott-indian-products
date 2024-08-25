/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import useProducts from "../../Hooks/useProducts"

const ModalCard = ({value}) => {
   const {productName} = value || {} 
   
   
    const {product} = useProducts()
    const findProduct = product.find(value => value.productName === productName)
    const {productImg, origin} = findProduct || {}
  return (
    <div
        
        className="bg-[#F3ECFF] space-y-5 border-2 border-primary border-opacity-20 p-4 rounded-xl cursor-pointer hover:border-opacity-40 transition-all"
      >
        <img
          className="mx-auto w-16 h-auto max-h-16"
          src={productImg}
          alt="noddles"
        />
        <h1 className="font-semibold text-xl text-center">{findProduct?.productName}</h1>
        <div className="text-center">
          <span className="red_badge">{origin}</span>
        </div>
      </div>
  )
}

export default ModalCard
