import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaSearchLocation,
  FaClock,
} from "react-icons/fa";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="mt-20 w-full flex items-center justify-center pt-[45px] pb-[35px]  px-[20px] bg-[#333]">
      <div className="grid grid-cols1 max-w-[1200px] w-full gap-[45px] sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <h3 className="text-white font-medium text-[18px]">Most Popular</h3>
          <div className="flex flex-col gap-5 text-white font-normal">
            <Link to="/devices/apple">
              <a className="sm:hover:text-red-500 transition duration-200 cursor-pointer">
                Apple
              </a>
            </Link>
            <Link to="/devices/samsung">
              <a className="sm:hover:text-red-500 transition duration-200 cursor-pointer">
                Samsung
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-medium text-[18px]">Contact Us</h3>
          <div className="flex flex-col gap-5">
            <div className="items-center flex gap-[10px]">
              <FaWhatsapp className="text-red-500" />
              <p className="text-white cursor-pointer sm:hover:underline sm:hover:text-red-500 transition duration-200">
                +1 (800) 123-45-67
              </p>
            </div>
            <div className="items-center flex gap-[10px]">
              <FontAwesomeIcon className="text-red-500" icon={faLocationDot} />
              <p className="text-white cursor-pointer sm:hover:underline sm:hover:text-red-500 transition duration-200">
                1 infinite loop, Cupertino, CA 95014
              </p>
            </div>
            <div className="items-center flex gap-[10px]">
              <FaClock className="text-red-500" />
              <p className="text-white cursor-pointer sm:hover:underline sm:hover:text-red-500 transition duration-200">
                9:00am - 6:00pm
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-white font-medium text-[18px]">Follow us</h3>
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer rounded-full p-[9px] transition duration-300 hover:bg-white border-[1px] border-red-500">
              <FaFacebook
                fontSize={17}
                className="transition duration-300 text-red-500 cursor-pointer"
              />
            </div>
            <div className="cursor-pointer rounded-full p-[9px] transition duration-300 hover:bg-white border-[1px] border-red-500">
              <FaInstagram
                fontSize={17}
                className="transition duration-300 text-red-500 cursor-pointer"
              />
            </div>
            <div className="cursor-pointer rounded-full p-[9px] transition duration-300 hover:bg-white border-[1px] border-red-500">
              <FaTwitter
                fontSize={17}
                className=" transition duration-300 text-red-500 cursor-pointer"
              />
            </div>
          </div>
          <p className="mt-2 text-[#6c757d]">
            All rights reserved. © Boundless-Commerce
          </p>
        </div>
        <div className="flex flex-col gap-5 max-w-[500px] w-full">
          <h3 className="text-white">The Moon LLC</h3>
          <p className="text-[#6c757d] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
