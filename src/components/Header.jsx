import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Context } from "../App";
import { FaCaretDown } from "react-icons/fa";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { cart, setCart } = useContext(Context);
  const [showNav, setShowNav] = useState(false);
  const totalPrice =
    cart.length >= 1 &&
    cart.map((item) => item.price).reduce((red, acc) => red + acc);
  return (
    <header className="relative flex w-full flex-col h-full">
      <div className="h-[70px] sm:h-[50px] bg-gray-100 w-full flex items-center justify-center header-top">
        <div className="max-w-[1200px] px-5 w-full justify-between flex flex-col sm:flex-row gap-2 sm:px-8  ">
          <div className="flex items-center gap-5 contact">
            <a className="cursor-pointer text-sm font-light sm:text-[16px] items-center gap-2 flex hover:text-red-500 transition ">
              <FaPhoneAlt />
              +1 (123) 123-45-67
            </a>
            <a className="cursor-pointer flex items-center sm:text-[16px] gap-2 font-light text-sm hover:text-red-500 transition ">
              <FaWhatsapp fontSize={18} />
              +1 (123) 123-45-67
            </a>
          </div>
          <div className="flex gap-4">
            <Link to="/shipping">
              <a className="cursor-pointer text-sm sm:text-[16px] font-light hover:text-red-500 transition">
                Shipping
              </a>
            </Link>
            <Link to="/about">
              <a className="cursor-pointer text-sm sm:text-[16px] font-light hover:text-red-500 transition">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full shadow-md bg-white flex items-center justify-center">
        <div className="max-w-[1200px] w-full flex">
          <div className="relative h-[110px] w-full flex md:h-[120px] md:justify-center items-center sm:px-8 px-5">
            <Link to="/">
              <h1 className="text-[26px] font-light font-rubik md:text-3xl">
                THE MOON
              </h1>
            </Link>

            <div className="sm:flex-row sm:gap-10 absolute md:right-[100px] right-[50px] flex flex-col gap-3">
              <Link to="/cart">
                <div className="relative">
                  <FontAwesomeIcon
                    className="cursor-pointer text-[20px] sm:text-[22px] lg:text-[24px]"
                    icon={faCartShopping}
                  />
                  <div className="h-5 flex items-center justify-center text-sm text-white w-5 rounded-full absolute top-[-15px] right-[-15px] bg-red-600">
                    {cart.length}
                  </div>
                </div>
              </Link>
              <FontAwesomeIcon
                className="cursor-pointer md:hidden text-[23px] sm:text-[24px]"
                icon={faBars}
                onClick={() => {
                  setShowNav(true);
                  document.querySelector("body").classList.add("hide-scroll");
                }}
              />
            </div>
            <div className="z-50 pb-2 cursor-pointer absolute hidden md:flex md:flex-col left-[15%] devices-div">
              <p className="flex items-center gap-1  text-[17px]">
                Phones
                <FaCaretDown />
              </p>
              <div className="absolute hidden  flex-col top-8 border-[1px] border-y-gray-100 border-x-gray-100 devices">
                <Link
                  className="cursor-pointer hover:text-red-500 hover:bg-gray-100 py-[10px]  pr-12 transition pl-3 bg-white border-[1px] "
                  to="/devices/apple"
                >
                  <a>Apple</a>
                </Link>
                <Link
                  className="cursor-pointer hover:text-red-500 hover:bg-gray-100 py-[10px]  pr-12 transition pl-3  bg-white border-[1px] "
                  to="/devices/samsung"
                >
                  <a>Samsung</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`z-[9999] fixed top-0 ${
          showNav ? "right-0" : "right-[-320px]"
        } h-screen w-[250px] sm:w-[300px] bg-white flex flex-col transition-all duration-[0.25s]`}
      >
        <div className="w-full bg-gray-100 px-5 py-7 flex gap-[30px] relative">
          <FontAwesomeIcon
            fontSize={21}
            className="absolute right-5 cursor-pointer top-[50%] translate-y-[-50%]"
            icon={faXmark}
            onClick={() => {
              setShowNav(false);
              document.querySelector("body").classList.remove("hide-scroll");
            }}
          />
          <Link to="/cart">
            <div className="relative">
              <FontAwesomeIcon
                className="cursor-pointer"
                fontSize={20}
                icon={faCartShopping}
                onClick={() => {
                  setShowNav(false);
                  document
                    .querySelector("body")
                    .classList.remove("hide-scroll");
                }}
              />
              <div className="h-[19px] flex items-center justify-center text-sm text-white w-[19px] rounded-full absolute top-[-15px] right-[-15px] bg-red-600">
                {cart.length}
              </div>
            </div>
          </Link>
          <p className="font-medium">{totalPrice ? totalPrice : 0} $</p>
        </div>
        <Link
          onClick={() => {
            setShowNav(false);
            document.querySelector("body").classList.remove("hide-scroll");
          }}
          className="p-5 border-b-[1px] hover:bg-gray-50 border-gray-150 cursor-pointer"
          to="/devices/apple"
        >
          <a>Apple</a>
        </Link>
        <Link
          onClick={() => {
            setShowNav(false);
            document.querySelector("body").classList.remove("hide-scroll");
          }}
          className="p-5 border-b-[1px] hover:bg-gray-50 border-gray-150 cursor-pointer"
          to="/devices/samsung"
        >
          <a>Samsung</a>
        </Link>
      </div>
      <div
        onClick={() => {
          setShowNav(false);
          document.querySelector("body").classList.remove("hide-scroll");
        }}
        className={`${
          showNav ? "block" : "hidden"
        } fixed top-0 left-0 backdrop-blur-[2px] w-full h-full bg-[rgba(0,0,0,0.5)] z-[100]`}
      ></div>
    </header>
  );
}

export default Header;
20050;
