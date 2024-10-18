"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselData = [
  { title: "Little Krazy", image: "/assets/carousel1.png" },
  { title: "Hawanim Groves City", image: "/assets/carousel2.png" },
  { title: "Picnic Market", image: "/assets/carousel3.png" },
  { title: "Lucaw", image: "/assets/carousel4.png" },
  { title: "Event Space", image: "/assets/carousel4.png" },
  { title: "Outdoor Lounge", image: "/assets/carousel5.png" },
  { title: "Night Club", image: "/assets/carousel6.png" },
  { title: "Rooftop Bar", image: "/assets/carousel7.png" },
];

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [WheelGesturesPlugin()]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_25%] min-w-0 pl-4 first:pl-0"
            >
              <Card className="h-64 md:h-80 transition-all duration-300 border-none rounded-[16px] ">
                <CardContent className="p-0 h-full relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 
                </CardContent>
              </Card>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
            </div>
            
          ))}
        </div>
        
      </div>
      {/* <button 
        onClick={scrollPrev} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={scrollNext} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}
    </div>
  );
}
