import React from "react";
import Grid from "@mui/material/Grid2";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

function ParkMap() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square w-full max-w-2xl mx-auto lg:mx-0 order-last xs:order-last lg:order-first">
            <img src="/assets/map.png" alt="Interactive map of The Groves" />
          </div>
          <div className="space-y-6 text-left">
            <h2 className="text-md font-secondaryFont  text-[#fff] uppercase tracking-wide">
              Experience the groves
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-primarFont leading-tight">
              Find your place
            </h1>
            <p className="text-xl text-gray-300 max-w-md font-secondaryFont  mx-auto lg:mx-0">
              Our interactive map will show you the way to the shops and
              restaurants that you want to see.
            </p>
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
              <span className="text-[16px] font-secondaryFont ">Open The Map</span>
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParkMap;
