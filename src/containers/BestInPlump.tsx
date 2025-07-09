import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import RoundGoButton from "../components/RoundGoButton";

export default function BestInPlump() {
  const items = [
    {
      name: "PLUMP JUICE",
      category: "Plumping & hydrating lip oil",
      price: "8.00",
      colors: ["pink", "red"],
      image: "/juice.png",
    },
    {
      name: "EXTREME MATTE PLUMPING PRIMER",
      category: "Extreme plumping lip primer",
      price: "16.00",
      colors: ["pink", "red"],
      image: "/premier.png",
    },
    {
      name: "PLUMP FILL",
      category: "Plumping lip liner",
      price: "16.00",
      colors: ["pink", "red", "brown", "blue"],
      image: "/fill.png",
    },
    {
      name: "EXTREME MATTE PLUMPING PRIMER",
      category: "Extreme plumping lip primer",
      price: "16.00",
      colors: ["pink", "red"],
      image: "/premier.png",
    },
    {
      name: "PLUMP FILL",
      category: "Plumping lip liner",
      price: "16.00",
      colors: ["pink", "red", "brown", "blue"],
      image: "/fill.png",
    },
    {
      name: "EXTREME MATTE PLUMPING PRIMER",
      category: "Extreme plumping lip primer",
      price: "16.00",
      colors: ["pink", "red"],
      image: "/premier.png",
    },
    {
      name: "PLUMP FILL",
      category: "Plumping lip liner",
      price: "16.00",
      colors: ["pink", "red", "brown", "blue"],
      image: "/fill.png",
    },
  ];
  return (
    <section>
      <div className="p-10">
        <div className="flex justify-between  flex-wrap gap-3">
          <h2 className="font-black font-theme text-accent text-6xl">
            BEST IN PLUMP
          </h2>
          <span>
            <RoundGoButton />
          </span>
        </div>
      </div>
      <div className="pl-10 max-md:px-10 flex gap-5 max-md:flex-col">
        <div className="md:w-[300px]  h-[600px] relative rounded-4xl overflow-hidden group shrink-0">
          <img
            className="w-full h-full object-cover -z-10 group-hover:scale-110 transition-all "
            src="/shopall.png"
            alt=""
          />
          <div className="absolute bottom-7 w-full flex justify-center items-center">
            <button className="mx-7 grow text-center border-white border rounded-3xl text-white font-bold p-1 hover:bg-white hover:text-accent cursor-pointer">
              SHOP APP
            </button>
          </div>
        </div>
        {/* SCROLLABLE SHOP ITEMS */}
        <Swiper
          spaceBetween={20}
          slidesPerView={4.1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          height={600}
          breakpoints={{
            0: { slidesPerView: 1, width: 500 },
            480: { slidesPerView: 1.5, width: 500 },
            640: { slidesPerView: 2.2, width: 500 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4.1 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide>
              <div className="grid h-[600px]">
                <div className=" border bg-white border-accent rounded-3xl overflow-hidden">
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h3 className="font-black font-theme text-[18px] mt-3 leading-tight h-[50px]">
                    {item.name}
                  </h3>
                  <p className="font-theme font-light text-sm">
                    {item.category}
                  </p>
                  <p className="font-bold text-sm ">{item.price}</p>
                  <div className="flex gap-1 mt-4">
                    {item.colors.map((color) => (
                      <span
                        key={color}
                        className="w-5 h-5 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
