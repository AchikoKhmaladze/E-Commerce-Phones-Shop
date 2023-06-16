import React, { useState } from "react";
import Header from "../components/Header";
import { useContext } from "react";
import { Context } from "../App";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(Context);
  const UniqueProduct = cart.filter(
    (obj, index) =>
      cart.findIndex((item) => item.device_name === obj.device_name) === index
  );
  const lastIndex = UniqueProduct.length - 1;
  const totalPrice =
    cart.length >= 1 &&
    cart.map((item) => item.price).reduce((red, acc) => red + acc);

  return (
    <div>
      <Header />
      <section className="flex items-center justify-center py-12 px-5 flex-col">
        <div className="flex flex-col items-center relative">
          <h1 className="text-[27px] md:text-[32px] font-light">
            Shopping Cart
          </h1>
          <div className="h-[4px] w-[60px] bg-red-500 mt-5"></div>
        </div>
        <div className="mt-20 md:mt-[110px] flex items-center flex-col w-full relative">
          {cart.length >= 1 && (
            <div className="font-medium sm:gap-[70px] left-[50%] translate-x-[-50%] md:gap-[90px] absolute z-10 hidden sm:flex top-[-35px]">
              <p>Price</p>
              <p>Qty</p>
              <p>Total</p>
            </div>
          )}
          {cart.length >= 1 ? (
            UniqueProduct.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`p-5 sm:flex-row relative sm:py-7 w-full  md:max-w-[750px] sm:gap-12 gap-[25px] flex flex-col ${
                    index % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <img
                      className="w-[50px] h-[60px]"
                      src={item.device_image}
                      alt=""
                    />
                    <Link to={`/product/${item.device_name}`}>
                      <a
                        href=""
                        className="underline hover:decoration-transparent text-blue-600 "
                      >
                        {item.device_name}
                      </a>
                    </Link>
                  </div>
                  <div className="flex sm:gap-[70px]  md:gap-[90px] sm:top-[20px] sm:absolute sm:left-[50%] sm:translate-x-[-50%] sm:flex-row flex-col gap-2">
                    <div className="flex sm:flex-col gap-2">
                      <p className="sm:hidden relative sm:bottom-[15px] font-medium  sm:text-gray-800">
                        Price:
                      </p>
                      <p>{item.price} $</p>
                    </div>
                    <div className="flex sm:flex-col gap-2 items-center">
                      <p className="sm:hidden relative sm:bottom-[15px] font-medium  sm:text-gray-800">
                        Qty:
                      </p>
                      <p>
                        {
                          cart.filter(
                            (device) => device.device_name === item.device_name
                          ).length
                        }
                      </p>
                    </div>
                    <div className="flex sm:flex-col gap-2">
                      <p className="sm:hidden relative sm:bottom-[15px] font-medium  sm:text-gray-800">
                        Total:
                      </p>
                      <p>
                        {" "}
                        {cart
                          .filter(
                            (device) => device.device_name === item.device_name
                          )
                          .map((item) => item.price)
                          .reduce((red, acc) => red + acc)}{" "}
                        $
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setCart((prev) => {
                        return [...prev].filter(
                          (dev) => dev.device_name !== item.device_name
                        );
                      });
                    }}
                    className="border-[1px] flex items-center justify-center h-[33px] bg-transparent sm:absolute sm:right-[20px] sm:top-5 hover:bg-gray-500 hover:text-white rounded-md transition text-[15px] w-[90px] text-gray-500 border-gray-400"
                  >
                    Remove
                  </button>
                </div>
              );
            })
          ) : (
            <div className="text-center flex flex-col items-center w-full gap-6">
              <p>Your shopping cart is empty.</p>
              <Link to="/">
                <button className="text-white hover:bg-green-800 transition bg-green-700 py-2 px-4 cursor-pointer rounded-[4px]">
                  Go Shopping!
                </button>
              </Link>
            </div>
          )}
          {cart.length >= 1 && (
            <div
              className={`py-10 sm:flex-row sm:gap-[100px] sm:justify-center px-5 gap-2 w-full flex flex-col ${
                lastIndex % 2 === 0 ? "bg-white" : "bg-gray-200"
              }`}
            >
              <div className="flex items-center gap-1">
                <p className="font-[500]">Oder Total:</p>
                <p className="font-[400]">{cart.length}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="font-[500]">Total Price:</p>
                <p className="font-[400]">{totalPrice} $</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
