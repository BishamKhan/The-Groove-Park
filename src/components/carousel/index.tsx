"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const carouselData = [
  { title: "Little Krazy", image: "/assets/carousel1.png" },
  { title: "Hawanim Groves City", image: "/assets/carousel2.png" },
  { title: "Picnic Market", image: "/assets/carousel3.png" },
  { title: "Lucaw", image: "/assets/carousel4.png" },
  { title: "Event Space", image: "/assets/carousel5.png" },
  { title: "Outdoor Lounge", image: "/assets/carousel6.png" },
  { title: "Night Club", image: "/assets/carousel7.png" },
  { title: "Rooftop Bar", image: "/assets/carousel2.png" },
];

export default function Carousel() {
  return (
    <>
      <div className="w-full py-12 px-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },

            480: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
          }}
        >
          {carouselData.map((item, index) => (
            <>
              <SwiperSlide
                className={`flex flex-col items-center rounded-lg !bg-transparent ${
                  index % 2 === 0
                    ? "md:!w-[300px] md:!h-[440px] !w-[228px] !h-[322px]"
                    : "md:!w-[228px] md:!h-[322px] !w-[228px] !h-[322px]"
                }`}
                key={index}
              >
                <div className="w-full h-[90%] relative overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-white font-primaryFont text-center text-xl mt-2">
                  {item.title}
                </h3>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
}
