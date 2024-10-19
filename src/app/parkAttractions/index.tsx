import Carousel from "@/components/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Grid from "@mui/material/Grid2";
import { ArrowRight, ArrowRightIcon, ChevronRight } from "lucide-react";
import React from "react";

const array = [
  { name: "Vida Verce", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
  { name: "Zama Zulu", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
  { name: "Khawaja Yanni", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
  { name: "Yamagata", img: "/assets/card1.png", rate: "100 SR PER GUEST" },
];

const ParkAttractions = () => {
  return (
    <div className="min-h-screen text-white pl-4 sm:p-8 md:p-12 lg:px-16 lg:pl-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="text-[32px] text-[#fff] font-primaryFont ">
          Book general access ticket and enjoy the attractions for free
        </p>
      </div>

      <div className="grid grid-cols-2 mt-4">
        <Button
          style={{
            border: "none",
            borderRadius: "16px",
            textAlign: "center",
            background:
              "linear-gradient(180deg, rgba(173,135,73,1) 0%, rgba(220,187,117,1) 70%)",
          }}
          className="py-2 px-6 w-[306px] h-[50px] md:w-[349px] md:h-[55px] rounded-full inline-flex justify-between items-center space-x-2 hover:bg-opacity-90 transition-colors"
        >
          <span className="text-[16px] font-secondaryFont ">
            Book General Access Ticket
          </span>
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div>

      {/* carousel */}
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default ParkAttractions;
