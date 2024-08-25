/* eslint-disable no-unused-vars */
import { Modal } from "antd";
import { useState } from "react";
import ModalCard from "./ModalCard";
/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  const { productImg, productName, origin, category, type, alt, company } =
    product || {};
    console.log(alt)
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
        className={`bg-[#F3ECFF] space-y-5 border-2 border-primary border-opacity-20 p-4 rounded-xl  hover:border-opacity-40 transition-all 
        ${alt[0].productName && 'cursor-pointer'}`}
      >
        <img
          className="mx-auto w-24 h-auto max-h-24"
          src={productImg}
          alt="noddles"
        />
        <h1 className="font-semibold text-2xl text-center">{productName}</h1>
        <div className="text-center">
          <span className="red_badge">{origin}</span>
        </div>
      </div>

      <Modal
        title={"Alternative Bangladeshi Products"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex gap-4 flex-wrap">
        {alt.map((products , idx) => (
            <ModalCard key={idx} value={products}/>
        ))}
        </div>
      </Modal>
    </>
  );
}

export default ProductCard;
