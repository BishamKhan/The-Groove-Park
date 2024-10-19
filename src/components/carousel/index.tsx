"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Navigation  } from "swiper/modules";
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
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1, 
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
          <SwiperSlide key={index}>
            <div className="w-full h-[526px] relative overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                // className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}
