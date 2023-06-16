import React from "react";
import smallbg from "/assets/homebg-sm.jpg";
import mediumbg from "/assets/homebg-md.jpeg";

function Banner() {
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={`w-full h-[750px] sm:h-[350px] md:h-[500px] xl:h-[700px] relative bg-[url("/assets/homebg-sm.jpg")] sm:bg-[url("/assets/homebg-md.jpeg")] sm:bg-fixed flex items-center justify-center`}
    >
      <div className="absolute top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.5)]"></div>
      <div className="text-center z-10 px-5">
        <h4 className="text-white text-xs md:text-sm xl:text-lg">
          MUHAMMAD ALI
        </h4>
        <h5 className="text-white my-5 md:my-7 xl:my-10 text-2xl md:text-4xl xl:text-5xl">
          Impossible is nothing
        </h5>
        <p className="text-white text-sm font-light md:text-[15px] xl:text-xl">
          Impossible is not a fact. It’s an opinion. Impossible is not a
          declaration. It’s a dare. Impossible is potential. Impossible is
          temporary.
        </p>
      </div>
    </div>
  );
}

export default Banner;
