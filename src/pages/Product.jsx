import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Phones from "../data/Phones";
import ProductPrices from "../data/ProductPrices";
import { faCalendar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCalendar, FaUndo, FaPhone } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../App";
import Footer from "../components/Footer";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const ref = useRef();
  const { cart, setCart } = useContext(Context);
  const { id } = useParams();
  const FindProduct = Phones.find((item) =>
    item.device_list.find((item) => item.device_name === id)
  ).device_list.find((item) => item.device_name === id);
  const findBrand = Phones.find((item) =>
    item.device_list.find(
      (item) => item.device_name === FindProduct.device_name
    )
  );

  const findIndex = findBrand.device_list.findIndex(
    (item) => item.device_name === FindProduct.device_name
  );
  return (
    <div>
      <Header />
      <section className="flex px-5 item-center justify-center gap-10 flex-col py-[50px] lg:py-[100px] lg:gap-20">
        <div className="flex flex-col sm:flex-row sm:justify-center gap-[60px] lg:gap-[140px]">
          <div className="flex flex-col items-center  gap-10">
            <h1 className="text-3xl sm:text-4xl">{FindProduct.device_name}</h1>
            <img
              className="h-[230px] max-w-max sm:h-[270px] lg:h-[300px]"
              src={FindProduct.device_image}
              alt=""
            />
          </div>
          <div className="w-full border-b-2 sm:max-w-[500px] border-t-2 py-10  flex flex-col">
            <h1 className="text-[23px] text-red-600">
              {ProductPrices[findIndex]} $
            </h1>
            <p className="text-green-600 mt-2">In stock</p>
            <div className="flex mt-6 gap-7 items-center">
              <div className="flex">
                <button
                  onClick={() => {
                    setQuantity((prev) => Number(prev) + 1);
                  }}
                  className="border-[1px] text-2xl border-gray-400 rounded-sm w-[40px]"
                >
                  +
                </button>
                <input
                  value={quantity}
                  ref={ref}
                  onChange={(e) => {
                    if (quantity < 1) {
                      setQuantity(1);
                    } else {
                      setQuantity(e.target.value);
                    }
                  }}
                  min={1}
                  className="w-[60px] text-center pl-3 h-10 border-t-[1px] border-gray-300 border-b-[1px] text-lg"
                  type="number"
                  name=""
                  id=""
                />
                <button
                  onClick={() => {
                    setQuantity((prev) => prev - 1);
                    if (quantity <= 1) {
                      setQuantity(1);
                    }
                  }}
                  className="border-[1px] text-2xl border-gray-400 rounded-sm w-[40px]"
                >
                  -
                </button>
              </div>
              <button
                onClick={() => {
                  setCart((prev) => {
                    const products = [];
                    for (let i = 0; i < quantity; i++) {
                      products.unshift({
                        ...FindProduct,
                        price: ProductPrices[findIndex],
                      });
                    }
                    return [...prev, ...products];
                  });
                }}
                className="bg-black flex py-[8px] px-3  text-lg items-center text-white rounded-md gap-2"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                Buy
              </button>
            </div>
            <div className="flex flex-col gap-5 mt-10">
              <div className="flex gap-5 items-center">
                <FaCalendarAlt color="red" fontSize={26} />
                Extended warranty for 30 days.
              </div>
              <div className="flex gap-5 items-center">
                <FaUndo color="red" fontSize={26} />
                Changed your mind? No problem!
              </div>
              <div className="flex gap-5 items-center">
                <FaPhone color="red" fontSize={26} />
                Customer support line
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-[1000px] justify-center m-auto text-center w-full">
          <p className="md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
            posuere arcu, vitae dignissim tortor. Aliquam pharetra luctus
            ultrices. Suspendisse vitae dui nibh. Nam maximus tristique dolor,
            at porta ante gravida quis. Cras vehicula at arcu sit amet
            vestibulum. Aliquam vel felis viverra, mollis elit in, mollis
            ligula. Quisque convallis dui nec molestie bibendum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla rhoncus felis id
            suscipit venenatis. Duis eget accumsan massa, vel dictum ante.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Product;
