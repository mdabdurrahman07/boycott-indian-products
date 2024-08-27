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
        onClick={showModal}
        className={`bg-[#F3ECFF] space-y-3 md:space-y-5 border-2 border-primary border-opacity-20 p-4 rounded-xl  hover:border-opacity-40 transition-all cursor-pointer`}
      >
        <img
          className="mx-auto w-16 md:w-24 h-auto max-h-24"
          src={productImg}
          alt="noddles"
        />
        <h1 className="font-bold text-xl text-center">{productName}</h1>
        <div className="text-center">
          <span className={`${origin.toLowerCase() === 'india' || origin.toLowerCase() === 'indian' ? 'red_badge' : 'green_badge'}`}>{origin}</span>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div>
            <h2 className="text-xl font-bold">{productName}</h2>
            <h3 className="text-lg font-semibold mt-3"><span className="font-bold">Company:</span> {company}</h3>
            <h3 className="text-lg font-semibold mt-1"><span className="font-bold">Country:</span> {origin}</h3>
          </div>
          <h3 className={`text-lg font-bold mt-4 ${alt[0].productName ? 'block' : 'hidden'}`}>Alternative</h3>
          <div className="grid grid-cols-2 md:flex gap-4 flex-wrap mt-4">
          {
            alt[0].productName ?
            alt.map((products , idx) => (
              <ModalCard key={idx} value={products}/>
            ))
            :
            <h3 className="text-center text-xl font-semibold">No Alternative Product Found</h3>
          }
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProductCard;
