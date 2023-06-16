import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Shipping() {
  return (
    <div>
      <Header />
      <section className="w-full  items-center flex justify-center py-12 px-5">
        <div className="flex flex-col gap-[60px] max-w-[1100px] w-full">
          <div className="flex flex-col items-center relative">
            <h1 className="text-[27px] md:text-[32px] font-light">Shipping</h1>
            <div className="h-[4px] w-[60px] bg-red-500 mt-5"></div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-2xl text-gray-800 font-medium md:text-[28px] lg:text-3xl">
              What is Lorem Ipsum
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Shipping;
