import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div className=" min-h-screen text-white p-8 md:pl-40 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-[30%] mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-primaryFont mb-4">
          Curate your experience as you like
        </h1>
        <Button
          style={{
            border: "none",
            borderRadius: "16px",
            textAlign: "center",
            background:
              "linear-gradient(180deg, rgba(173,135,73,1) 0%, rgba(220,187,117,1) 70%)",
          }}
          className="py-2 px-6 w-[216px] h-[50px] md:w-[232px] md:h-[55px] rounded-full inline-flex justify-between items-center space-x-2 hover:bg-opacity-90 transition-colors"
        >
          <span className="text-[16px] font-secondaryFont ">Book Tickets</span>
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div>

      <div className="w-full md:w-[70%]">
        <Carousel />
      </div>
    </div>
  );
};

export default Experience;
