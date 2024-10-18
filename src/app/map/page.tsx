import React from "react";
import Grid from "@mui/material/Grid2";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function ParkMap() {
  return (
    <div className="min-h-screen bg-[#1a2601] text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-square w-full max-w-2xl mx-auto lg:mx-0 order-last xs:order-last lg:order-first">
          <img
            src="/assets/map.png"
            alt="Interactive map of The Groves"
          />
        </div>
        <div className="space-y-6 text-left">
          <h2 className="text-lg font-semibold text-[#fff] uppercase tracking-wide">
            Experience the groves
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Find your place
          </h1>
          <p className="text-xl text-gray-300 max-w-md mx-auto lg:mx-0">
            Our interactive map will show you the way to the shops and restaurants that you want to see.
          </p>
          <Button className="bg-[#c9aa71] hover:bg-[#b5975d] text-black font-semibold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Open the Map
            <ChevronRight/>
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ParkMap;
