"use client";
import Navbar from "@/components/navbar";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "The new era of luxury",
    subtitle:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oZPx2pliRxPCEdgqTSFUTARxZYYMn4.png",
  },
  {
    title: "Experience The new era of luxury",
    subtitle: "Indulge in our world-class amenities and unparalleled service.",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    title: "Unforgettable new era of luxury",
    subtitle: "Create lasting memories in our exquisite surroundings.",
    image: "/placeholder.svg?height=1080&width=1920",
  },
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="h-screen w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/mainbg.png')",
      }}
    >
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex justify-center items-center text-left overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity  duration-1000 flex justify-center items-center ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center text-center text-white px-8">
                  <p>KHAWAJA YANNI</p>
                  <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-md mb-8">{slide.subtitle}</p>
                  <button
                    style={{
                      border: "none",
                      borderRadius: "16px",
                      width: "299px",
                      height: "55px",
                      textAlign: "center",
                      background:
                        "linear-gradient(180deg, rgba(173,135,73,1) 0%, rgba(220,187,117,1) 70%)",
                    }}
                    className="py-2 px-6 rounded-full inline-flex items-center space-x-2 hover:bg-opacity-90 transition-colors w-fit"
                  >
                    <span>Book reservation now</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
