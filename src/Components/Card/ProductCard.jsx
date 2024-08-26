/* eslint-disable no-unused-vars */
import { Modal } from "antd";
import { useState } from "react";
import ModalCard from "./ModalCard";
/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  const { productImg, productName, origin, category, type, alt, company } =
    product || {};
    
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      

      <div
        onClick={alt[0].productName && showModal}
        className={`bg-[#F3ECFF] space-y-3 md:space-y-5 border-2 border-primary border-opacity-20 p-4 rounded-xl  hover:border-opacity-40 transition-all 
        ${alt[0].productName && 'cursor-pointer'}`}
      >
        <img
          className="mx-auto w-16 md:w-24 h-auto max-h-24"
          src={productImg}
          alt="noddles"
        />
        <h1 className="font-semibold text-xl lg:text-2xl text-center">{productName}</h1>
        <div className="text-center">
          <span className="red_badge">{origin}</span>
        </div>
      </div>

      <Modal
        title={"Alternative Products"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="grid grid-cols-2 md:flex gap-4 flex-wrap">
        {alt.map((products , idx) => (
            <ModalCard key={idx} value={products}/>
        ))}
        </div>
      </Modal>
    </>
  );
}

export default ProductCard;
