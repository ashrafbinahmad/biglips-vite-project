import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
export default function ProjectCosmetics() {
  const items = [
    "pr1.png",
    "pr2.png",
    "pr3.png",
    "pr4.png",
    "pr5.png",
    "pr1.png",
    "pr2.png",
    "pr3.png",
  ];
  return (
    <section>
      <div className=" py-[5rem] max-w-[1700px] m-auto">
        <div className="p-10 flex justify-between items-center py-5 flex-wrap gap-3">
          <h2 className=" font-black font-theme text-accent text-4xl max-md:text-2xl">
            @PROJECT_COSMETICS
          </h2>
          <button className="hover:bg-accent  cursor-pointer px-10 py-1 hover:text-white transition-all border-[1.5px] border-accent-light rounded-4xl flex font-theme font-black text-lg text-accent">
            FOLLOW US
          </button>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={6.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          height={600}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 3.5 },
            640: { slidesPerView: 4.2 },
            768: { slidesPerView: 6.1 },
            1024: { slidesPerView: 7.1 },
          }}
        >
          {items.map((item, ind) => (
            <SwiperSlide className={`${ind === 0 ? "ml-10" : ""}`}>
              <div className={`grid h-full  `}>
                <div className=" bg-white  rounded-4xl overflow-hidden">
                  <img src={item} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
