import React from "react";
import Header from "../components/Header";
import Phones from "../data/Phones";
import ProductPrices from "../data/ProductPrices";
import { FaFire } from "react-icons/fa";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";
import Footer from "../components/Footer";

function Apple() {
  const { cart, setCart } = useContext(Context);
  const ApplePhones = Phones.find((item) => item.brand_name === "Apple");
  console.log(cart);
  return (
    <div>
      <Header />

      <section className="w-full flex items-center justify-center gap-20 flex-col p-10">
        <div className="flex flex-col items-center relative">
          <h1 className="text-[27px] md:text-[32px] font-light">
            {ApplePhones.brand_name}
          </h1>
          <div className="h-[4px] w-[60px] bg-red-500 mt-5"></div>
        </div>
        <div className="max-w-[1200px] w-full grid gap-[45px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {ApplePhones.device_list.map((item, index) => {
            return (
              <div
                className="flex relative flex-col gap-8  bg-white cursor-pointer items"
                key={item.device_id}
              >
                <div className="absolute rounded-md text-[11px] p-[2px] top-[-5px] flex items-center left-[-42px] bg-yellow-300">
                  <FaFire className="mb-1" />
                  Hot!
                </div>
                <Link to={`/product/${item.device_name}`} key={index}>
                  <img className="pixel-img" src={item.device_image} alt="" />
                </Link>
                <div className="flex flex-col items-center gap-2 prices relative overflow-hidden">
                  <h4 className="font-light text-md md:text-lg">
                    {item.device_name}
                  </h4>
                  <p className="font-normal text-sm md:text-[16px] text-red-600">
                    {ProductPrices[index]} $
                  </p>
                  <div
                    onClick={() => {
                      setCart((prev) => {
                        return [
                          ...prev,
                          { ...item, price: ProductPrices[index] },
                        ];
                      });
                    }}
                    className="flex justify-center w-[140px] py-2 rounded-md gap-2 items-center text-white absolute bottom-[-40px] bg-black  right-[50%] translate-x-1/2 add-to-cart"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Add to cart
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Apple;
